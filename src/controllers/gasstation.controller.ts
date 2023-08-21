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
import {Gasstation} from '../models';
import {GasstationRepository} from '../repositories';

export class GasstationController {
  constructor(
    @repository(GasstationRepository)
    public gasstationRepository : GasstationRepository,
  ) {}

  @post('/gasstations')
  @response(200, {
    description: 'Gasstation model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gasstation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gasstation, {
            title: 'NewGasstation',
            exclude: ['id'],
          }),
        },
      },
    })
    gasstation: Omit<Gasstation, 'id'>,
  ): Promise<Gasstation> {
    return this.gasstationRepository.create(gasstation);
  }

  @get('/gasstations/count')
  @response(200, {
    description: 'Gasstation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gasstation) where?: Where<Gasstation>,
  ): Promise<Count> {
    return this.gasstationRepository.count(where);
  }

  @get('/gasstations')
  @response(200, {
    description: 'Array of Gasstation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gasstation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gasstation) filter?: Filter<Gasstation>,
  ): Promise<Gasstation[]> {
    return this.gasstationRepository.find(filter);
  }

  @patch('/gasstations')
  @response(200, {
    description: 'Gasstation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gasstation, {partial: true}),
        },
      },
    })
    gasstation: Gasstation,
    @param.where(Gasstation) where?: Where<Gasstation>,
  ): Promise<Count> {
    return this.gasstationRepository.updateAll(gasstation, where);
  }

  @get('/gasstations/{id}')
  @response(200, {
    description: 'Gasstation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gasstation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Gasstation, {exclude: 'where'}) filter?: FilterExcludingWhere<Gasstation>
  ): Promise<Gasstation> {
    return this.gasstationRepository.findById(id, filter);
  }

  @patch('/gasstations/{id}')
  @response(204, {
    description: 'Gasstation PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gasstation, {partial: true}),
        },
      },
    })
    gasstation: Gasstation,
  ): Promise<void> {
    await this.gasstationRepository.updateById(id, gasstation);
  }

  @put('/gasstations/{id}')
  @response(204, {
    description: 'Gasstation PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() gasstation: Gasstation,
  ): Promise<void> {
    await this.gasstationRepository.replaceById(id, gasstation);
  }

  @del('/gasstations/{id}')
  @response(204, {
    description: 'Gasstation DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.gasstationRepository.deleteById(id);
  }
}
