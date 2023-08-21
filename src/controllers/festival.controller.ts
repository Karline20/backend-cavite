import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Festival} from '../models';
import {FestivalRepository} from '../repositories';

export class FestivalController {
  constructor(
    @repository(FestivalRepository)
    public festivalRepository : FestivalRepository,
  ) {}

  @post('/festivals')
  @response(200, {
    description: 'Festival model instance',
    content: {'application/json': {schema: getModelSchemaRef(Festival)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Festival, {
            title: 'NewFestival',
            exclude: ['id'],
          }),
        },
      },
    })
    festival: Omit<Festival, 'id'>,
  ): Promise<Festival> {
    return this.festivalRepository.create(festival);
  }

  @get('/festivals/count')
  @response(200, {
    description: 'Festival model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Festival) where?: Where<Festival>,
  ): Promise<Count> {
    return this.festivalRepository.count(where);
  }

  @get('/festivals')
  @response(200, {
    description: 'Array of Festival model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Festival, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Festival) filter?: Filter<Festival>,
  ): Promise<Festival[]> {
    return this.festivalRepository.find(filter);
  }

  @patch('/festivals')
  @response(200, {
    description: 'Festival PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Festival, {partial: true}),
        },
      },
    })
    festival: Festival,
    @param.where(Festival) where?: Where<Festival>,
  ): Promise<Count> {
    return this.festivalRepository.updateAll(festival, where);
  }

  @get('/festivals/{id}')
  @response(200, {
    description: 'Festival model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Festival, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Festival, {exclude: 'where'}) filter?: FilterExcludingWhere<Festival>
  ): Promise<Festival> {
    return this.festivalRepository.findById(id, filter);
  }

  @patch('/festivals/{id}')
  @response(204, {
    description: 'Festival PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Festival, {partial: true}),
        },
      },
    })
    festival: Festival,
  ): Promise<void> {
    await this.festivalRepository.updateById(id, festival);
  }

  @put('/festivals/{id}')
  @response(204, {
    description: 'Festival PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() festival: Festival,
  ): Promise<void> {
    await this.festivalRepository.replaceById(id, festival);
  }

  @del('/festivals/{id}')
  @response(204, {
    description: 'Festival DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.festivalRepository.deleteById(id);
  }
}
