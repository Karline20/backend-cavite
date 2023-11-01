import {
  Filter,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  post,
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

  @get('/tutorial')
  @response(200, {
    description: 'Array of Rating model instances',
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
    return this.tutorialRepository.find(filter);
  }
}