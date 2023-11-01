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
import {Terms} from '../models';
import {TermsRepository} from '../repositories';

export class TermsController {
  constructor(
    @repository(TermsRepository)
    public termsRepository: TermsRepository,
  ) { }

  @post('/terms')
  @response(200, {
    description: 'Terms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Terms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Terms, {
            title: 'NewTerms',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<Terms, 'y'>,
  ): Promise<Terms> {
    return this.termsRepository.create(rating);
  }

  @get('/terms/count')
  @response(200, {
    description: 'Terms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Terms) where?: Where<Terms>,
  ): Promise<Count> {
    return this.termsRepository.count(where);
  }


  @get('/terms')
  @response(200, {
    description: 'Array of Terms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Terms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Terms) filter?: Filter<Terms>,
  ): Promise<Terms[]> {
    return this.termsRepository.find(filter);
  }

  @patch('/terms')
  @response(200, {
    description: 'Terms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Terms, {partial: true}),
        },
      },
    })
    rating: Terms,
    @param.where(Terms) where?: Where<Terms>,
  ): Promise<Count> {
    return this.termsRepository.updateAll(rating, where);
  }

  @get('/terms/{id}')
  @response(200, {
    description: 'Terms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Terms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Terms, {exclude: 'where'}) filter?: FilterExcludingWhere<Terms>
  ): Promise<Terms> {
    return this.termsRepository.findById(id, filter);
  }

  @patch('/terms/{id}')
  @response(204, {
    description: 'Terms PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Terms, {partial: true}),
        },
      },
    })
    rating: Terms,
  ): Promise<void> {
    await this.termsRepository.updateById(id, rating);
  }


  @put('/terms/{id}')
  @response(204, {
    description: 'Terms PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rating: Terms,
  ): Promise<void> {
    await this.termsRepository.replaceById(id, rating);
  }

  @del('/terms/{id}')
  @response(204, {
    description: 'Terms DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.termsRepository.deleteById(id);
  }

}
