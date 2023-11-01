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
import {Rating} from '../models';
import {RatingRepository} from '../repositories';

export class RatingController {
  constructor(
    @repository(RatingRepository)
    public ratingRepository: RatingRepository,
  ) { }

  @post('/ratings')
  @response(200, {
    description: 'Rating model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rating)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rating, {
            title: 'NewRating',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<Rating, 'y'>,
  ): Promise<Rating> {
    return this.ratingRepository.create(rating);
  }

  @get('/ratings/count')
  @response(200, {
    description: 'Rating model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rating) where?: Where<Rating>,
  ): Promise<Count> {
    return this.ratingRepository.count(where);
  }

  @get('/ratings/sum')
  @response(200, {
    description: 'Rating model sum and average for a specific eventid',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            totalValue: { type: 'number' },
            averageRating: { type: 'number' },
          },
        },
      },
    },
  })
  async calculateSum(
    @param.query.string('eventid') eventid: string,
  ): Promise<{ totalValue: number; averageRating: number }> {
    const filter: Filter<Rating> = {
      where: { eventid: eventid }, // Filter by the provided eventid
    };

    const ratings = await this.ratingRepository.find(filter);

    // Calculate the total value (sum) of ratings for the specified eventid
    let totalValue = 0;

    for (const rating of ratings) {
      const ratingValue = rating.rate ?? 0;
      totalValue += ratingValue;
    }

    // Calculate the average rating
    const count = ratings.length;
    const averageRating = count === 0 ? 0 : totalValue / count;

    return { totalValue, averageRating };
  }

  @get('/ratings')
  @response(200, {
    description: 'Array of Rating model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rating, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rating) filter?: Filter<Rating>,
  ): Promise<Rating[]> {
    return this.ratingRepository.find(filter);
  }

  @patch('/ratings')
  @response(200, {
    description: 'Rating PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rating, {partial: true}),
        },
      },
    })
    rating: Rating,
    @param.where(Rating) where?: Where<Rating>,
  ): Promise<Count> {
    return this.ratingRepository.updateAll(rating, where);
  }

  @get('/ratings/{id}')
  @response(200, {
    description: 'Rating model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rating, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rating, {exclude: 'where'}) filter?: FilterExcludingWhere<Rating>
  ): Promise<Rating> {
    return this.ratingRepository.findById(id, filter);
  }

  @patch('/ratings/{id}')
  @response(204, {
    description: 'Rating PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rating, {partial: true}),
        },
      },
    })
    rating: Rating,
  ): Promise<void> {
    await this.ratingRepository.updateById(id, rating);
  }

  @put('/ratings/{id}')
  @response(204, {
    description: 'Rating PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rating: Rating,
  ): Promise<void> {
    await this.ratingRepository.replaceById(id, rating);
  }

  @del('/ratings/{id}')
  @response(204, {
    description: 'Rating DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ratingRepository.deleteById(id);
  }

  @get('/ratingsByEvent/{eventid}')
  @response(200, {
    description: 'Array of Rating model instances by event ID',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rating, {includeRelations: true}),
        },
      },
    },
  })
  async findByEventId(
    @param.path.string('eventid') eventid: string,
  ): Promise<Rating[]> {
    // Define a filter to find ratings by event ID
    const filter: Filter<Rating> = {
      where: {
        eventid: eventid,
      },
    };
    // Retrieve the ratings based on the filter
    return this.ratingRepository.find(filter);
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
  ): Promise<string> {
    const { userid, eventid } = data;

    const existingRating = await this.ratingRepository.findOne({
      where: { userid, eventid },
    });

    if (existingRating) {
      return 'existing';
    } else {
      return 'not existing';
    }
  }


}
