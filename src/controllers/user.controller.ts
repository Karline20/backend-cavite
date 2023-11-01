// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {authenticate, TokenService} from '@loopback/authentication';
import {
  Credentials,
  MyUserService,
  TokenServiceBindings,
  User,
  UserRepository,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {inject} from '@loopback/core';
import {Filter, model, property, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  post,
  requestBody,
  response,
  SchemaObject
} from '@loopback/rest';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import {genSalt, hash} from 'bcryptjs';
import _ from 'lodash';

@model()
export class NewUserRequest extends User {
  @property({
    type: 'string',
    required: true,
  })
  password: string;
}

const CredentialsSchema: SchemaObject = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 8,
    },
  },
};

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  },
};

export class UserController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile,
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                token: {
                  type: 'string',
                },
                usertype: {
                  type: 'string',
                },
                emailVerified: {
                  type: 'boolean',
                }
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{id: string; token: string; usertype: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);
    // Set the 'usertype' from the user model
    const usertype = user.usertype;
    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);
    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {id: user.id, token, usertype};
  }

  @authenticate('jwt')
  @get('/whoAmI', {
    responses: {
      '200': {
        description: 'Return current user',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async whoAmI(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<string> {
    return currentUserProfile[securityId];
  }

  @post('/signup', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': User,
            },
          },
        },
      },
    },
  })
  async signUp(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewUserRequest, {
            title: 'NewUser',
          }),
        },
      },
    })
    newUserRequest: NewUserRequest,
  ): Promise<User> {
    const password = await hash(newUserRequest.password, await genSalt());
    const savedUser = await this.userRepository.create(
      _.omit(newUserRequest, 'password'),
    );

    await this.userRepository.userCredentials(savedUser.id).create({password});

    return savedUser;
  }

  @get('/users')
  @response(200, {
    description: 'Array of Allevents model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @get('/getAllUsers/{usertype}')
  @response(200, {
    description: 'Array of all events model instances by event ID',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        },
      },
    },
  })
  async findByEventId(
    @param.path.string('usertype') usertype: string,
  ): Promise<User[]> {
    // Define a filter to find ratings by event ID
    const filter: Filter<User> = {
      where: {
        usertype: usertype,
      },
    };
    // Retrieve the ratings based on the filter
    return this.userRepository.find(filter);
  }

  // GET endpoint to check if email is verified
  // @get('/users/check-email-verified/{id}')
  // @response(200, {
  //   description: 'Check if email is verified for a user',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           emailVerified: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // async checkEmailVerified(
  //   @param.path.string('id') id: string,
  // ): Promise<{emailVerified: boolean}> {
  //   const user = await this.userRepository.findById(id);
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   return {emailVerified: user.emailVerified ?? false};
  // }

  // POST endpoint to update emailVerified value
  // @post('/users/update-email-verified/{id}')
  // @response(200, {
  //   description: 'Updated user with emailVerified status',
  //   content: {
  //     'application/json': {
  //       schema: getModelSchemaRef(User),
  //     },
  //   },
  // })
  // async updateEmailVerified(
  //   @param.path.string('id') id: string,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: {
  //           type: 'object',
  //           properties: {
  //             emailVerified: {
  //               type: 'boolean',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   })
  //   updateData: {emailVerified: boolean},
  // ): Promise<User> {
  //   const user = await this.userRepository.findById(id);
  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   user.emailVerified = updateData.emailVerified;
  //   await this.userRepository.update(user);
  //   return user;
  // }
}
