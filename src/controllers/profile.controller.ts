import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Profile} from '../models';
import {ProfileRepository} from '../repositories';

export class ProfileController {
  constructor(
    @repository(ProfileRepository)
    public profileRepository: ProfileRepository,
  ) { }

  @post('/profile')
  @response(200, {
    description: 'Profile model instance',
    content: {'application/json': {schema: getModelSchemaRef(Profile)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profile, {
            title: 'NewProfile',
            exclude: ['id'],
          }),
        },
      },
    })
    profile: Omit<Profile, 'id'>,
  ): Promise<Profile> {
    return this.profileRepository.create(profile);
  }

  @get('/profile')
  @response(200, {
    description: 'Array of Profile model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Profile, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Profile) filter?: Filter<Profile>,
  ): Promise<Profile[]> {
    return this.profileRepository.find(filter);
  }

  @get('/profile/{id}')
  @response(200, {
    description: 'Profile model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Profile, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Profile, {exclude: 'where'}) filter?: FilterExcludingWhere<Profile>
  ): Promise<Profile> {
    return this.profileRepository.findById(id, filter);
  }

  @patch('/profile/{id}')
  @response(204, {
    description: 'Profile PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profile, {partial: true}),
        },
      },
    })
    profile: Profile,
  ): Promise<void> {
    return this.profileRepository.updateById(id, profile);
  }

  @put('/profile/{id}')
  @response(204, {
    description: 'Profile PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() profile: Profile,
  ): Promise<void> {
    await this.profileRepository.replaceById(id, profile);
  }

  @del('/profile/{id}')
  @response(204, {
    description: 'Profile DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.profileRepository.deleteById(id);
  }

  @get('/profile/by-userid/{userid}')
  @response(200, {
    description: 'Profile model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Profile),
      },
    },
  })
  async findByUserId(
    @param.path.string('userid') userid: string,
    @param.filter(Profile) filter?: Filter<Profile>,
  ): Promise<Profile | undefined> { // Update the return type to allow undefined
    const profile = await this.profileRepository.findOne({where: {userid}, ...filter});
    if (profile) {
      return profile; // Return the profile if found
    }
  }

}
