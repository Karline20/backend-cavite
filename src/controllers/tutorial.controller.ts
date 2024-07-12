import {
  Filter,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response
} from '@loopback/rest';
import {Tutorial} from '../models';
import {TutorialRepository} from '../repositories';

export class TutorialController {
  constructor(
    @repository(TutorialRepository)
    public tutorialRepository: TutorialRepository,
  ) { }

  @post('/tutorial')
  @response(200, {
    description: 'Rating model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tutorial)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tutorial, {
            title: 'NewRating',
            exclude: ['y'],
          }),
        },
      },
    })
    tutorial: Omit<Tutorial, 'y'>,
  ): Promise<Tutorial> {
    return this.tutorialRepository.create(tutorial);
  }

  @patch('/tutorial/{id}')
  @response(204, {
    description: 'Tutorial PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tutorial, {partial: true}),
        },
      },
    })
    tutorial: Tutorial,
  ): Promise<void> {
    await this.tutorialRepository.updateById(id, tutorial);
  }

  @put('/tutorial/{id}')
  @response(204, {
    description: 'Tutorial PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string, // Assuming 'id' is a string
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tutorial, {partial: true}),
        },
      },
    })
    tutorial: Tutorial,
  ): Promise<void> {
    await this.tutorialRepository.updateById(id, tutorial);
  }

  @get('/tutorial')
  @response(200, {
    description: 'Array of Tutorial model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tutorial, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tutorial) filter?: Filter<Tutorial>,
  ): Promise<Tutorial[]> {
    filter = filter ?? {};
    filter.order = ['tutorial ASC'];
    return this.tutorialRepository.find(filter);
  }


  @get('/tutorial/search')
  @response(200, {
    description: 'Array of Tutorial model instances matching the search criteria',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tutorial, {includeRelations: true}),
        },
      },
    },
  })
  async searchTutorial(
    @param.query.string('q') searchQuery: string
  ): Promise<Tutorial[]> {
    const filter: Filter<Tutorial> = {
      where: {
        tutorial: {ilike: `%${searchQuery}%`}
      },
    };
    return this.tutorialRepository.find(filter);
  }
}
