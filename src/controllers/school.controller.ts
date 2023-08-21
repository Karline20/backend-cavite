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
import {Schools} from '../models';
import {SchoolsRepository} from '../repositories';

export class SchoolController {
  constructor(
    @repository(SchoolsRepository)
    public schoolsRepository : SchoolsRepository,
  ) {}

  @post('/schools')
  @response(200, {
    description: 'Schools model instance',
    content: {'application/json': {schema: getModelSchemaRef(Schools)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schools, {
            title: 'NewSchools',
            exclude: ['id'],
          }),
        },
      },
    })
    schools: Omit<Schools, 'id'>,
  ): Promise<Schools> {
    return this.schoolsRepository.create(schools);
  }

  @get('/schools/count')
  @response(200, {
    description: 'Schools model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Schools) where?: Where<Schools>,
  ): Promise<Count> {
    return this.schoolsRepository.count(where);
  }

  @get('/schools')
  @response(200, {
    description: 'Array of Schools model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Schools, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Schools) filter?: Filter<Schools>,
  ): Promise<Schools[]> {
    return this.schoolsRepository.find(filter);
  }

  @patch('/schools')
  @response(200, {
    description: 'Schools PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schools, {partial: true}),
        },
      },
    })
    schools: Schools,
    @param.where(Schools) where?: Where<Schools>,
  ): Promise<Count> {
    return this.schoolsRepository.updateAll(schools, where);
  }

  @get('/schools/{id}')
  @response(200, {
    description: 'Schools model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Schools, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Schools, {exclude: 'where'}) filter?: FilterExcludingWhere<Schools>
  ): Promise<Schools> {
    return this.schoolsRepository.findById(id, filter);
  }

  @patch('/schools/{id}')
  @response(204, {
    description: 'Schools PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schools, {partial: true}),
        },
      },
    })
    schools: Schools,
  ): Promise<void> {
    await this.schoolsRepository.updateById(id, schools);
  }

  @put('/schools/{id}')
  @response(204, {
    description: 'Schools PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() schools: Schools,
  ): Promise<void> {
    await this.schoolsRepository.replaceById(id, schools);
  }

  @del('/schools/{id}')
  @response(204, {
    description: 'Schools DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.schoolsRepository.deleteById(id);
  }
}
