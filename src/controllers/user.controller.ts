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
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
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

  @get('/users/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteUserById(
    @param.path.string('id') id: string,
  ): Promise<void> {
    // Check if the user exists
    const userExists = await this.userRepository.exists(id);
    if (!userExists) {
      throw new HttpErrors.NotFound(`User with id ${id} not found.`);
    }

    // Delete the user
    await this.userRepository.deleteById(id);
  }

  @del('/users', {
    responses: {
      '204': {
        description: 'Users DELETE success',
      },
    },
  })
  async deleteUsersById(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    })
    ids: string[],
  ): Promise<void> {
    for (const id of ids) {
      // Check if the user exists
      const userExists = await this.userRepository.exists(id);
      if (!userExists) {
        throw new HttpErrors.NotFound(`User with id ${id} not found.`);
      }

      // Delete the user
      await this.userRepository.deleteById(id);
    }
  }

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
                username: {
                  type: 'string',
                },
                emailVerified: {
                  type: 'boolean',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{id: string; token: string; username: string, emailVerified: boolean}> {
    // Ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    if (!user || !user.username || !user.emailVerified) {
      throw new HttpErrors.Unauthorized('Invalid user or missing username');
    }
    // Set the 'username' from the user model
    const username = user.username;
    // Convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);
    // Create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    const emailVerified = user.emailVerified;

    return {id: user.id, token, username, emailVerified};
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

  @get('/getAllUsers/{username}')
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
    @param.path.string('username') username: string, // Make the parameter required
  ): Promise<User[]> {
    if (!username) {
      throw new HttpErrors.BadRequest('Username parameter is required');
    }

    // Define a filter to find ratings by event ID
    const filter: Filter<User> = {
      where: {
        username: username,
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
