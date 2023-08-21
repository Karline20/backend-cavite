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
import {Restaurants} from '../models';
import {RestaurantsRepository} from '../repositories';

export class RestaurantController {
  constructor(
    @repository(RestaurantsRepository)
    public restaurantsRepository : RestaurantsRepository,
  ) {}

  @post('/restaurants')
  @response(200, {
    description: 'Restaurants model instance',
    content: {'application/json': {schema: getModelSchemaRef(Restaurants)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurants, {
            title: 'NewRestaurants',
            exclude: ['id'],
          }),
        },
      },
    })
    restaurants: Omit<Restaurants, 'id'>,
  ): Promise<Restaurants> {
    return this.restaurantsRepository.create(restaurants);
  }

  @get('/restaurants/count')
  @response(200, {
    description: 'Restaurants model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Restaurants) where?: Where<Restaurants>,
  ): Promise<Count> {
    return this.restaurantsRepository.count(where);
  }

  @get('/restaurants')
  @response(200, {
    description: 'Array of Restaurants model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Restaurants, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Restaurants) filter?: Filter<Restaurants>,
  ): Promise<Restaurants[]> {
    return this.restaurantsRepository.find(filter);
  }

  @patch('/restaurants')
  @response(200, {
    description: 'Restaurants PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurants, {partial: true}),
        },
      },
    })
    restaurants: Restaurants,
    @param.where(Restaurants) where?: Where<Restaurants>,
  ): Promise<Count> {
    return this.restaurantsRepository.updateAll(restaurants, where);
  }

  @get('/restaurants/{id}')
  @response(200, {
    description: 'Restaurants model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Restaurants, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Restaurants, {exclude: 'where'}) filter?: FilterExcludingWhere<Restaurants>
  ): Promise<Restaurants> {
    return this.restaurantsRepository.findById(id, filter);
  }

  @patch('/restaurants/{id}')
  @response(204, {
    description: 'Restaurants PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurants, {partial: true}),
        },
      },
    })
    restaurants: Restaurants,
  ): Promise<void> {
    await this.restaurantsRepository.updateById(id, restaurants);
  }

  @put('/restaurants/{id}')
  @response(204, {
    description: 'Restaurants PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() restaurants: Restaurants,
  ): Promise<void> {
    await this.restaurantsRepository.replaceById(id, restaurants);
  }

  @del('/restaurants/{id}')
  @response(204, {
    description: 'Restaurants DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.restaurantsRepository.deleteById(id);
  }
}
