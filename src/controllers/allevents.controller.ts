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
import {Allevents} from '../models';
import {AlleventsRepository} from '../repositories';

export class AlleventsController {
  constructor(
    @repository(AlleventsRepository)
    public alleventsRepository: AlleventsRepository,
  ) { }

  @post('/allevents')
  @response(200, {
    description: 'Allevents model instance',
    content: {'application/json': {schema: getModelSchemaRef(Allevents)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Allevents, {
            title: 'NewAllevents',
            exclude: ['id'],
          }),
        },
      },
    })
    allevents: Omit<Allevents, 'id'>,
  ): Promise<Allevents> {
    return this.alleventsRepository.create(allevents);
  }

  @get('/allevents/count')
  @response(200, {
    description: 'Allevents model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Allevents) where?: Where<Allevents>,
  ): Promise<Count> {
    return this.alleventsRepository.count(where);
  }

  @get('/allevents')
  @response(200, {
    description: 'Array of Allevents model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Allevents, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Allevents) filter?: Filter<Allevents>,
  ): Promise<Allevents[]> {
    return this.alleventsRepository.find(filter);
  }

  @patch('/allevents')
  @response(200, {
    description: 'Allevents PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Allevents, {partial: true}),
        },
      },
    })
    allevents: Allevents,
    @param.where(Allevents) where?: Where<Allevents>,
  ): Promise<Count> {
    return this.alleventsRepository.updateAll(allevents, where);
  }

  @get('/allevents/{id}')
  @response(200, {
    description: 'Allevents model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Allevents, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Allevents, {exclude: 'where'}) filter?: FilterExcludingWhere<Allevents>
  ): Promise<Allevents> {
    return this.alleventsRepository.findById(id, filter);
  }

  @patch('/allevents/{id}')
  @response(204, {
    description: 'Allevents PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Allevents, {partial: true}),
        },
      },
    })
    allevents: Allevents,
  ): Promise<void> {
    await this.alleventsRepository.updateById(id, allevents);
  }

  @put('/allevents/{id}')
  @response(204, {
    description: 'Allevents PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() allevents: Allevents,
  ): Promise<void> {
    await this.alleventsRepository.replaceById(id, allevents);
  }

  @del('/allevents/{id}')
  @response(204, {
    description: 'Allevents DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.alleventsRepository.deleteById(id);
  }

  @get('/alleventsByCategory/{eventcategory}')
  @response(200, {
    description: 'Array of all events model instances by event ID',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Allevents, {includeRelations: true}),
        },
      },
    },
  })
  async findByEventId(
    @param.path.string('eventcategory') eventcategory: string,
  ): Promise<Allevents[]> {
    // Define a filter to find ratings by event ID
    const filter: Filter<Allevents> = {
      where: {
        eventcategory: eventcategory,
      },
    };

    // Retrieve the ratings based on the filter
    return this.alleventsRepository.find(filter);
  }

  @get('/allevents/countByCategory/{eventcategory}')
  @response(200, {
    description: 'Count of Allevents by eventcategory',
    content: {'application/json': {schema: CountSchema}},
  })
  async countByCategory(
    @param.path.string('eventcategory') eventcategory: string,
  ): Promise<Count> {
    const where: Where<Allevents> = {
      eventcategory: eventcategory,
    };
    return this.alleventsRepository.count(where);
  }

  @get('/allevents/search')
  @response(200, {
    description: 'Array of Allevents model instances matching the search criteria',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Allevents, {includeRelations: true}),
        },
      },
    },
  })
  async searchEvents(
    @param.query.string('q') searchQuery: string,
    @param.query.string('eventcategory') eventcategory: string,
  ): Promise<Allevents[]> {
    const filter: Filter<Allevents> = {
      where: {
        and: [
          {
            or: [
              {name: {ilike: `%${searchQuery}%`}},
              {description: {ilike: `%${searchQuery}%`}},
              {location: {ilike: `%${searchQuery}%`}},
            ],
          },
          {eventcategory: {ilike: `%${eventcategory}%`}},
        ],
      },
    };
    return this.alleventsRepository.find(filter);
  }

  @get('/alleventsByCategoryToo/{category}')
  @response(200, {
    description: 'Array of all events model instances by event ID',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Allevents, {includeRelations: true}),
        },
      },
    },
  })
  async findByEventIdCate(
    @param.path.string('category') category: string,
  ): Promise<Allevents[]> {
    // Define a filter to find ratings by event ID
    const filter: Filter<Allevents> = {
      where: {
        category: category,
      },
    };
    // Retrieve the ratings based on the filter
    return this.alleventsRepository.find(filter);
  }


  @get('/allevents/search/category')
  @response(200, {
    description: 'Array of Allevents model instances matching the search criteria',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Allevents, {includeRelations: true}),
        },
      },
    },
  })
  async searchEventsCategory(
    @param.query.string('q') searchQuery: string,
    @param.query.string('eventcategory') eventcategory: string,
    @param.query.string('category') category: string,
  ): Promise<Allevents[]> {
    const filter: Filter<Allevents> = {
      where: {
        and: [
          {
            or: [
              {name: {ilike: `%${searchQuery}%`}},
              {description: {ilike: `%${searchQuery}%`}},
              {location: {ilike: `%${searchQuery}%`}},
            ],
          },
          {eventcategory: {ilike: `%${eventcategory}%`}},
          {category: {ilike: `%${category}%`}},
        ],
      },
    };
    return this.alleventsRepository.find(filter);
  }


}


// @get('/allevents/search')
// @response(200, {
//   description: 'Array of Allevents model instances matching the search criteria',
//   content: {
//     'application/json': {
//       schema: {
//         type: 'array',
//         items: getModelSchemaRef(Allevents, { includeRelations: true }),
//       },
//     },
//   },
// })
// async searchEvents(
//   @param.query.string('q') searchQuery: string,
// ): Promise<Allevents[]> {
//   // Define a filter to search for events based on the searchQuery and eventCategory
//   const filter: Filter<Allevents> = {
//     where: {
//       and: [
//         {
//           or: [
//             { eventname: { ilike: `%${searchQuery}%` } },
//             { description: { ilike: `%${searchQuery}%` } },
//             { eventcategory: { ilike: `%${searchQuery}%` } },
//             { location: { ilike: `%${searchQuery}%` } },
//           ],
//         },
//       ],
//     },
//   };
//   return this.alleventsRepository.find(filter);
// }

