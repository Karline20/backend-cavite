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
import {TutorialStatus} from '../models';
import {TutorialStatusRepository} from '../repositories';

export class TutorialStatusController {
  constructor(
    @repository(TutorialStatusRepository)
    public tutorialStatusRepository: TutorialStatusRepository,
  ) { }

  @post('/tutorialStatus')
  @response(200, {
    description: 'TutorialStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(TutorialStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TutorialStatus, {
            title: 'NewRating',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<TutorialStatus, 'y'>,
  ): Promise<TutorialStatus> {
    return this.tutorialStatusRepository.create(rating);
  }

  @get('/tutorialByUserId/{tutorialid}/{userid}')
  @response(200, {
    description: 'TutorialStatus model instance by tutorial ID and user ID',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TutorialStatus, { includeRelations: true }),
      },
    },
  })
  async findByTutorialIdAndUserId(
    @param.path.string('tutorialid') tutorialid: string,
    @param.path.string('userid') userid: string,
  ): Promise<TutorialStatus | null> {
    // Define a filter to find a single TutorialStatus instance by tutorial ID and user ID
    const filter: Filter<TutorialStatus> = {
      where: {
        tutorialid: tutorialid,
        userid: userid,
      },
    };
    // Retrieve the TutorialStatus instance based on the filter
    const tutorialStatus = await this.tutorialStatusRepository.findOne(filter);
    return tutorialStatus ?? null;
  }

}
