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
import {Foods} from '../models';
import {FoodsRepository} from '../repositories';

export class FoodController {
  constructor(
    @repository(FoodsRepository)
    public foodsRepository : FoodsRepository,
  ) {}

  @post('/foods')
  @response(200, {
    description: 'Foods model instance',
    content: {'application/json': {schema: getModelSchemaRef(Foods)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Foods, {
            title: 'NewFoods',
            exclude: ['id'],
          }),
        },
      },
    })
    foods: Omit<Foods, 'id'>,
  ): Promise<Foods> {
    return this.foodsRepository.create(foods);
  }

  @get('/foods/count')
  @response(200, {
    description: 'Foods model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Foods) where?: Where<Foods>,
  ): Promise<Count> {
    return this.foodsRepository.count(where);
  }

  @get('/foods')
  @response(200, {
    description: 'Array of Foods model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Foods, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Foods) filter?: Filter<Foods>,
  ): Promise<Foods[]> {
    return this.foodsRepository.find(filter);
  }

  @patch('/foods')
  @response(200, {
    description: 'Foods PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Foods, {partial: true}),
        },
      },
    })
    foods: Foods,
    @param.where(Foods) where?: Where<Foods>,
  ): Promise<Count> {
    return this.foodsRepository.updateAll(foods, where);
  }

  @get('/foods/{id}')
  @response(200, {
    description: 'Foods model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Foods, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Foods, {exclude: 'where'}) filter?: FilterExcludingWhere<Foods>
  ): Promise<Foods> {
    return this.foodsRepository.findById(id, filter);
  }

  @patch('/foods/{id}')
  @response(204, {
    description: 'Foods PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Foods, {partial: true}),
        },
      },
    })
    foods: Foods,
  ): Promise<void> {
    await this.foodsRepository.updateById(id, foods);
  }

  @put('/foods/{id}')
  @response(204, {
    description: 'Foods PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() foods: Foods,
  ): Promise<void> {
    await this.foodsRepository.replaceById(id, foods);
  }

  @del('/foods/{id}')
  @response(204, {
    description: 'Foods DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.foodsRepository.deleteById(id);
  }
}
