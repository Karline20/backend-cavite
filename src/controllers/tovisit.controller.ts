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
import {Tovisit} from '../models';
import {TovisitRepository} from '../repositories';

export class TovisitController {
  constructor(
    @repository(TovisitRepository)
    public tovisitRepository : TovisitRepository,
  ) {}

  @post('/tovisits')
  @response(200, {
    description: 'Tovisit model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tovisit)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tovisit, {
            title: 'NewTovisit',
            exclude: ['id'],
          }),
        },
      },
    })
    tovisit: Omit<Tovisit, 'id'>,
  ): Promise<Tovisit> {
    return this.tovisitRepository.create(tovisit);
  }

  @get('/tovisits/count')
  @response(200, {
    description: 'Tovisit model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tovisit) where?: Where<Tovisit>,
  ): Promise<Count> {
    return this.tovisitRepository.count(where);
  }

  @get('/tovisits')
  @response(200, {
    description: 'Array of Tovisit model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tovisit, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tovisit) filter?: Filter<Tovisit>,
  ): Promise<Tovisit[]> {
    return this.tovisitRepository.find(filter);
  }

  @patch('/tovisits')
  @response(200, {
    description: 'Tovisit PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tovisit, {partial: true}),
        },
      },
    })
    tovisit: Tovisit,
    @param.where(Tovisit) where?: Where<Tovisit>,
  ): Promise<Count> {
    return this.tovisitRepository.updateAll(tovisit, where);
  }

  @get('/tovisits/{id}')
  @response(200, {
    description: 'Tovisit model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tovisit, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tovisit, {exclude: 'where'}) filter?: FilterExcludingWhere<Tovisit>
  ): Promise<Tovisit> {
    return this.tovisitRepository.findById(id, filter);
  }

  @patch('/tovisits/{id}')
  @response(204, {
    description: 'Tovisit PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tovisit, {partial: true}),
        },
      },
    })
    tovisit: Tovisit,
  ): Promise<void> {
    await this.tovisitRepository.updateById(id, tovisit);
  }

  @put('/tovisits/{id}')
  @response(204, {
    description: 'Tovisit PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tovisit: Tovisit,
  ): Promise<void> {
    await this.tovisitRepository.replaceById(id, tovisit);
  }

  @del('/tovisits/{id}')
  @response(204, {
    description: 'Tovisit DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tovisitRepository.deleteById(id);
  }
}
