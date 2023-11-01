import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {Ranking} from '../models';
import {RankingRepository} from '../repositories';

export class RankingController {
  constructor(
    @repository(RankingRepository)
    public rankingRepository: RankingRepository,
  ) { }

  @post('/ranking')
  @response(200, {
    description: 'Ranking model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ranking)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ranking, {
            title: 'NewRanking',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<Ranking, 'y'>,
  ): Promise<Ranking> {
    return this.rankingRepository.create(rating);
  }

  @get('/ranking/count')
  @response(200, {
    description: 'Ranking model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ranking) where?: Where<Ranking>,
  ): Promise<Count> {
    return this.rankingRepository.count(where);
  }

  @get('/ranking')
  @response(200, {
    description: 'Array of Ranking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ranking, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ranking) filter?: Filter<Ranking>,
  ): Promise<Ranking[]> {
    return this.rankingRepository.find(filter);
  }

  @patch('/ranking/{id}')
  @response(204, {
    description: 'Ranking PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ranking, {partial: true}),
        },
      },
    })
    rating: Ranking,
  ): Promise<void> {
    await this.rankingRepository.updateById(id, rating);
  }

  @get('/ranking/by-userid/{userid}')
  @response(200, {
    description: 'Ranking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ranking),
      },
    },
  })
  async findByUserId(
    @param.path.string('userid') userid: string,
    @param.filter(Ranking) filter?: Filter<Ranking>,
  ): Promise<Ranking | undefined> { //
    const ranking = await this.rankingRepository.findOne({ where: { userid }, ...filter });
    if (ranking) {
      return ranking; // Return the ranking if found
    }
  }


  @get('/check-existence/ranking/{userid}')
  async checkExistence(
    @param.path.string('userid') userid: string,
  ): Promise<boolean> {
    const existingRanking = await this.rankingRepository.findOne({
      where: { userid },
    });
    return !!existingRanking;
  }

  @get('/ranking/sorted-by-score')
  async getRankingsByScore(): Promise<Ranking[]> {
    return this.rankingRepository.find({
      order: ['score DESC'],
      limit: 10,
    });
  }

}
