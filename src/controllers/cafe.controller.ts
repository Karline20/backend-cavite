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
import {Cafe} from '../models';
import {CafeRepository} from '../repositories';

export class CafeController {
  constructor(
    @repository(CafeRepository)
    public cafeRepository : CafeRepository,
  ) {}

  @post('/cafes')
  @response(200, {
    description: 'Cafe model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cafe)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cafe, {
            title: 'NewCafe',
            exclude: ['id'],
          }),
        },
      },
    })
    cafe: Omit<Cafe, 'id'>,
  ): Promise<Cafe> {
    return this.cafeRepository.create(cafe);
  }

  @get('/cafes/count')
  @response(200, {
    description: 'Cafe model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cafe) where?: Where<Cafe>,
  ): Promise<Count> {
    return this.cafeRepository.count(where);
  }

  @get('/cafes')
  @response(200, {
    description: 'Array of Cafe model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cafe, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cafe) filter?: Filter<Cafe>,
  ): Promise<Cafe[]> {
    return this.cafeRepository.find(filter);
  }

  @patch('/cafes')
  @response(200, {
    description: 'Cafe PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cafe, {partial: true}),
        },
      },
    })
    cafe: Cafe,
    @param.where(Cafe) where?: Where<Cafe>,
  ): Promise<Count> {
    return this.cafeRepository.updateAll(cafe, where);
  }

  @get('/cafes/{id}')
  @response(200, {
    description: 'Cafe model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cafe, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cafe, {exclude: 'where'}) filter?: FilterExcludingWhere<Cafe>
  ): Promise<Cafe> {
    return this.cafeRepository.findById(id, filter);
  }

  @patch('/cafes/{id}')
  @response(204, {
    description: 'Cafe PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cafe, {partial: true}),
        },
      },
    })
    cafe: Cafe,
  ): Promise<void> {
    await this.cafeRepository.updateById(id, cafe);
  }

  @put('/cafes/{id}')
  @response(204, {
    description: 'Cafe PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cafe: Cafe,
  ): Promise<void> {
    await this.cafeRepository.replaceById(id, cafe);
  }

  @del('/cafes/{id}')
  @response(204, {
    description: 'Cafe DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cafeRepository.deleteById(id);
  }
}
