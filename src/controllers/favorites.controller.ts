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
import {Favorites} from '../models';
import {FavoritesRepository} from '../repositories';

export class FavoritesController {
  constructor(
    @repository(FavoritesRepository)
    public favoritesRepository: FavoritesRepository,
  ) { }

  @post('/favorites')
  @response(200, {
    description: 'Favorites model instance',
    content: {'application/json': {schema: getModelSchemaRef(Favorites)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Favorites, {
            title: 'NewFavorites',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<Favorites, 'y'>,
  ): Promise<Favorites> {
    return this.favoritesRepository.create(rating);
  }

  @get('/favorites/count')
  @response(200, {
    description: 'Favorites model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Favorites) where?: Where<Favorites>,
  ): Promise<Count> {
    return this.favoritesRepository.count(where);
  }


  @get('/favorites')
  @response(200, {
    description: 'Array of Favorites model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Favorites, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Favorites) filter?: Filter<Favorites>,
  ): Promise<Favorites[]> {
    return this.favoritesRepository.find(filter);
  }

  @patch('/favorites')
  @response(200, {
    description: 'Favorites PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Favorites, {partial: true}),
        },
      },
    })
    rating: Favorites,
    @param.where(Favorites) where?: Where<Favorites>,
  ): Promise<Count> {
    return this.favoritesRepository.updateAll(rating, where);
  }

  @get('/favorites/{id}')
  @response(200, {
    description: 'Favorites model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Favorites, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Favorites, {exclude: 'where'}) filter?: FilterExcludingWhere<Favorites>
  ): Promise<Favorites> {
    return this.favoritesRepository.findById(id, filter);
  }

  @patch('/favorites/{id}')
  @response(204, {
    description: 'Favorites PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Favorites, {partial: true}),
        },
      },
    })
    rating: Favorites,
  ): Promise<void> {
    await this.favoritesRepository.updateById(id, rating);
  }


  @put('/favorites/{id}')
  @response(204, {
    description: 'Favorites PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rating: Favorites,
  ): Promise<void> {
    await this.favoritesRepository.replaceById(id, rating);
  }

  @del('/favorites/{id}')
  @response(204, {
    description: 'Favorites DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.favoritesRepository.deleteById(id);
  }

  @get('/favoritesByUser/{userid}')
  @response(200, {
    description: 'Array of Favorites model instances by user ID',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Favorites, {includeRelations: true}),
        },
      },
    },
  })
  async findByUserId(
    @param.path.string('userid') userid: string,
  ): Promise<Favorites[]> {
    // Define a filter to find favorites by user ID
    const filter: Filter<Favorites> = {
      where: {
        userid: userid,
      },
    };
    // Retrieve the favorites based on the filter
    return this.favoritesRepository.find(filter);
  }

  @post('/check-existence')
  @response(200, {
    description: 'Check if userid and eventid exist',
    content: { 'application/json': { schema: { type: 'string' } } },
  })
  async checkExistence(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              userid: { type: 'string' },
              eventid: { type: 'string' },
            },
          },
        },
      },
    })
    data: { userid: string; eventid: string },
  ): Promise<boolean> {
    const { userid, eventid } = data;

    const existingFavorites = await this.favoritesRepository.findOne({
      where: { userid, eventid },
    });

    return !!existingFavorites;
  }


}
