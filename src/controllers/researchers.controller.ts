import {
  Count,
  CountSchema,
  Filter,
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
import {Researcher} from '../models';
import {ResearcherRepository} from '../repositories';

export class ResearcherController {
  constructor(
    @repository(ResearcherRepository)
    public researcherRepository: ResearcherRepository,
  ) { }

  @post('/researcher')
  @response(200, {
    description: 'Researcher model instance',
    content: {'application/json': {schema: getModelSchemaRef(Researcher)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Researcher, {
            title: 'NewResearcher',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<Researcher, 'y'>,
  ): Promise<Researcher> {
    return this.researcherRepository.create(rating);
  }

  @get('/researcher/count')
  @response(200, {
    description: 'Researcher model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Researcher) where?: Where<Researcher>,
  ): Promise<Count> {
    return this.researcherRepository.count(where);
  }


  @get('/researcher')
  @response(200, {
    description: 'Array of Researcher model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Researcher, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Researcher) filter?: Filter<Researcher>,
  ): Promise<Researcher[]> {
    filter = filter ?? {};
    filter.order = ['name ASC']
    return this.researcherRepository.find(filter);
  }

  @patch('/researcher')
  @response(200, {
    description: 'Researcher PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Researcher, {partial: true}),
        },
      },
    })
    rating: Researcher,
    @param.where(Researcher) where?: Where<Researcher>,
  ): Promise<Count> {
    return this.researcherRepository.updateAll(rating, where);
  }

  @get('/researcher/{id}')
  @response(200, {
    description: 'Researcher model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Researcher, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Researcher, {exclude: 'where'}) filter?: FilterExcludingWhere<Researcher>
  ): Promise<Researcher> {
    return this.researcherRepository.findById(id, filter);
  }

  @patch('/researcher/{id}')
  @response(204, {
    description: 'Researcher PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Researcher, {partial: true}),
        },
      },
    })
    rating: Researcher,
  ): Promise<void> {
    await this.researcherRepository.updateById(id, rating);
  }


  @put('/researcher/{id}')
  @response(204, {
    description: 'Researcher PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rating: Researcher,
  ): Promise<void> {
    await this.researcherRepository.replaceById(id, rating);
  }

  @del('/researcher/{id}')
  @response(204, {
    description: 'Researcher DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.researcherRepository.deleteById(id);
  }

}
