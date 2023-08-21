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
import {Govoffices} from '../models';
import {GovofficesRepository} from '../repositories';

export class GovofficesController {
  constructor(
    @repository(GovofficesRepository)
    public govofficesRepository : GovofficesRepository,
  ) {}

  @post('/govoffices')
  @response(200, {
    description: 'Govoffices model instance',
    content: {'application/json': {schema: getModelSchemaRef(Govoffices)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Govoffices, {
            title: 'NewGovoffices',
            exclude: ['id'],
          }),
        },
      },
    })
    govoffices: Omit<Govoffices, 'id'>,
  ): Promise<Govoffices> {
    return this.govofficesRepository.create(govoffices);
  }

  @get('/govoffices/count')
  @response(200, {
    description: 'Govoffices model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Govoffices) where?: Where<Govoffices>,
  ): Promise<Count> {
    return this.govofficesRepository.count(where);
  }

  @get('/govoffices')
  @response(200, {
    description: 'Array of Govoffices model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Govoffices, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Govoffices) filter?: Filter<Govoffices>,
  ): Promise<Govoffices[]> {
    return this.govofficesRepository.find(filter);
  }

  @patch('/govoffices')
  @response(200, {
    description: 'Govoffices PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Govoffices, {partial: true}),
        },
      },
    })
    govoffices: Govoffices,
    @param.where(Govoffices) where?: Where<Govoffices>,
  ): Promise<Count> {
    return this.govofficesRepository.updateAll(govoffices, where);
  }

  @get('/govoffices/{id}')
  @response(200, {
    description: 'Govoffices model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Govoffices, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Govoffices, {exclude: 'where'}) filter?: FilterExcludingWhere<Govoffices>
  ): Promise<Govoffices> {
    return this.govofficesRepository.findById(id, filter);
  }

  @patch('/govoffices/{id}')
  @response(204, {
    description: 'Govoffices PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Govoffices, {partial: true}),
        },
      },
    })
    govoffices: Govoffices,
  ): Promise<void> {
    await this.govofficesRepository.updateById(id, govoffices);
  }

  @put('/govoffices/{id}')
  @response(204, {
    description: 'Govoffices PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() govoffices: Govoffices,
  ): Promise<void> {
    await this.govofficesRepository.replaceById(id, govoffices);
  }

  @del('/govoffices/{id}')
  @response(204, {
    description: 'Govoffices DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.govofficesRepository.deleteById(id);
  }
}
