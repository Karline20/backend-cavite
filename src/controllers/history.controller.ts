import {
  Count,
  CountSchema,
  Filter,
  FilterBuilder,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {History} from '../models';
import {HistoryRepository} from '../repositories';

export class HistoryController {
  constructor(
    @repository(HistoryRepository)
    public historyRepository: HistoryRepository,
  ) { }

  @post('/histories')
  @response(200, {
    description: 'History model instance',
    content: {'application/json': {schema: getModelSchemaRef(History)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(History, {
            title: 'NewHistory',
            exclude: ['id'],
          }),
        },
      },
    })
    history: Omit<History, 'id'>,
  ): Promise<History> {
    return this.historyRepository.create(history);
  }

  @get('/histories/count')
  @response(200, {
    description: 'History model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(History) where?: Where<History>,
  ): Promise<Count> {
    return this.historyRepository.count(where);
  }

  @get('/histories')
  @response(200, {
    description: 'Array of History model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(History, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(History) filter?: Filter<History>,
  ): Promise<History[]> {
    return this.historyRepository.find(filter);
  }

  @get('/histories-category')
  @response(200, {
    description: 'Array of History model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(History, {includeRelations: true}),
        },
      },
    },
  })
  async findCategory(
    @param.filter(History) filter?: Filter<History>,
  ): Promise<History[]> {
    filter = filter ?? new FilterBuilder<History>().fields('category').build();
    return this.historyRepository.find(filter);
  }

  @patch('/histories')
  @response(200, {
    description: 'History PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(History, {partial: true}),
        },
      },
    })
    history: History,
    @param.where(History) where?: Where<History>,
  ): Promise<Count> {
    return this.historyRepository.updateAll(history, where);
  }

  @get('/histories/{id}')
  @response(200, {
    description: 'History model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(History, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(History, {exclude: 'where'}) filter?: FilterExcludingWhere<History>
  ): Promise<History> {
    return this.historyRepository.findById(id, filter);
  }

  @patch('/histories/{id}')
  @response(204, {
    description: 'History PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(History, {partial: true}),
        },
      },
    })
    history: History,
  ): Promise<void> {
    await this.historyRepository.updateById(id, history);
  }

  @put('/histories/{id}')
  @response(204, {
    description: 'History PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() history: History,
  ): Promise<void> {
    await this.historyRepository.replaceById(id, history);
  }

  @del('/histories/{id}')
  @response(204, {
    description: 'History DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.historyRepository.deleteById(id);
  }
}
