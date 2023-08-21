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
import {Homemadefood} from '../models';
import {HomemadefoodRepository} from '../repositories';

export class HomefoodController {
  constructor(
    @repository(HomemadefoodRepository)
    public homemadefoodRepository : HomemadefoodRepository,
  ) {}

  @post('/homemadefoods')
  @response(200, {
    description: 'Homemadefood model instance',
    content: {'application/json': {schema: getModelSchemaRef(Homemadefood)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Homemadefood, {
            title: 'NewHomemadefood',
            exclude: ['id'],
          }),
        },
      },
    })
    homemadefood: Omit<Homemadefood, 'id'>,
  ): Promise<Homemadefood> {
    return this.homemadefoodRepository.create(homemadefood);
  }

  @get('/homemadefoods/count')
  @response(200, {
    description: 'Homemadefood model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Homemadefood) where?: Where<Homemadefood>,
  ): Promise<Count> {
    return this.homemadefoodRepository.count(where);
  }

  @get('/homemadefoods')
  @response(200, {
    description: 'Array of Homemadefood model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Homemadefood, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Homemadefood) filter?: Filter<Homemadefood>,
  ): Promise<Homemadefood[]> {
    return this.homemadefoodRepository.find(filter);
  }

  @patch('/homemadefoods')
  @response(200, {
    description: 'Homemadefood PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Homemadefood, {partial: true}),
        },
      },
    })
    homemadefood: Homemadefood,
    @param.where(Homemadefood) where?: Where<Homemadefood>,
  ): Promise<Count> {
    return this.homemadefoodRepository.updateAll(homemadefood, where);
  }

  @get('/homemadefoods/{id}')
  @response(200, {
    description: 'Homemadefood model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Homemadefood, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Homemadefood, {exclude: 'where'}) filter?: FilterExcludingWhere<Homemadefood>
  ): Promise<Homemadefood> {
    return this.homemadefoodRepository.findById(id, filter);
  }

  @patch('/homemadefoods/{id}')
  @response(204, {
    description: 'Homemadefood PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Homemadefood, {partial: true}),
        },
      },
    })
    homemadefood: Homemadefood,
  ): Promise<void> {
    await this.homemadefoodRepository.updateById(id, homemadefood);
  }

  @put('/homemadefoods/{id}')
  @response(204, {
    description: 'Homemadefood PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() homemadefood: Homemadefood,
  ): Promise<void> {
    await this.homemadefoodRepository.replaceById(id, homemadefood);
  }

  @del('/homemadefoods/{id}')
  @response(204, {
    description: 'Homemadefood DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.homemadefoodRepository.deleteById(id);
  }
}
