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
import {Fastfood} from '../models';
import {FastfoodRepository} from '../repositories';

export class FastfoodController {
  constructor(
    @repository(FastfoodRepository)
    public fastfoodRepository : FastfoodRepository,
  ) {}

  @post('/fastfoods')
  @response(200, {
    description: 'Fastfood model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fastfood)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fastfood, {
            title: 'NewFastfood',
            exclude: ['id'],
          }),
        },
      },
    })
    fastfood: Omit<Fastfood, 'id'>,
  ): Promise<Fastfood> {
    return this.fastfoodRepository.create(fastfood);
  }

  @get('/fastfoods/count')
  @response(200, {
    description: 'Fastfood model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fastfood) where?: Where<Fastfood>,
  ): Promise<Count> {
    return this.fastfoodRepository.count(where);
  }

  @get('/fastfoods')
  @response(200, {
    description: 'Array of Fastfood model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fastfood, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fastfood) filter?: Filter<Fastfood>,
  ): Promise<Fastfood[]> {
    return this.fastfoodRepository.find(filter);
  }

  @patch('/fastfoods')
  @response(200, {
    description: 'Fastfood PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fastfood, {partial: true}),
        },
      },
    })
    fastfood: Fastfood,
    @param.where(Fastfood) where?: Where<Fastfood>,
  ): Promise<Count> {
    return this.fastfoodRepository.updateAll(fastfood, where);
  }

  @get('/fastfoods/{id}')
  @response(200, {
    description: 'Fastfood model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fastfood, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Fastfood, {exclude: 'where'}) filter?: FilterExcludingWhere<Fastfood>
  ): Promise<Fastfood> {
    return this.fastfoodRepository.findById(id, filter);
  }

  @patch('/fastfoods/{id}')
  @response(204, {
    description: 'Fastfood PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fastfood, {partial: true}),
        },
      },
    })
    fastfood: Fastfood,
  ): Promise<void> {
    await this.fastfoodRepository.updateById(id, fastfood);
  }

  @put('/fastfoods/{id}')
  @response(204, {
    description: 'Fastfood PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fastfood: Fastfood,
  ): Promise<void> {
    await this.fastfoodRepository.replaceById(id, fastfood);
  }

  @del('/fastfoods/{id}')
  @response(204, {
    description: 'Fastfood DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fastfoodRepository.deleteById(id);
  }
}
