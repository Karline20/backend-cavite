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
import {Addevent} from '../models';
import {AddeventRepository} from '../repositories';

export class AddeventController {
  constructor(
    @repository(AddeventRepository)
    public addeventRepository: AddeventRepository,
  ) { }

  @post('/addevents')
  @response(200, {
    description: 'Addevent model instance',
    content: {'application/json': {schema: getModelSchemaRef(Addevent)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Addevent, {
            title: 'NewAddevent',
            exclude: ['id'],
          }),
        },
      },
    })
    addevent: Omit<Addevent, 'id'>,
  ): Promise<Addevent> {
    return this.addeventRepository.create(addevent);
  }

  @get('/addevents/count')
  @response(200, {
    description: 'Addevent model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Addevent) where?: Where<Addevent>,
  ): Promise<Count> {
    return this.addeventRepository.count(where);
  }

  // @get('/addevents')
  // @response(200, {
  //   description: 'Array of Addevent model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(Addevent, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Addevent) filter?: Filter<Addevent>,
  // ): Promise<Addevent[]> {

  //   const orderFilter: Filter<Addevent> = {
  //     order: ['name ASC'],
  //   };

  //   const mergeFilter = {...filter, ...orderFilter};

  //   return this.addeventRepository.find(mergeFilter);
  // }

  @get('/addevents')
  @response(200, {
    description: 'Array of Addevent model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Addevent, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Addevent) filter?: Filter<Addevent>,
  ): Promise<Addevent[]> {
    // Define the order you want to sort by
    const customOrder = [
      'Cavite City Hymn',
      'Church',
      'History',
      'Events',
      'Places To visit',
      'Foods',
      'Emergency Care & Contacts',
      'Schools',
      'Government offices',
      'Hotel & Resorts',
      'Gas Station',
    ];

    // Fetch all addevents
    const addevents = await this.addeventRepository.find(filter);

    // Sort the addevents according to the custom order
    addevents.sort((a, b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';

      const indexA = customOrder.indexOf(nameA);
      const indexB = customOrder.indexOf(nameB);
      if (indexA !== -1 && indexB !== -1) {
        // If the name is not in the custom order, push it to the end
        return indexA - indexB;
      }

      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      return nameA.localeCompare(nameB);
    });

    return addevents;
  }

  @patch('/addevents')
  @response(200, {
    description: 'Addevent PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Addevent, {partial: true}),
        },
      },
    })
    addevent: Addevent,
    @param.where(Addevent) where?: Where<Addevent>,
  ): Promise<Count> {
    return this.addeventRepository.updateAll(addevent, where);
  }

  @get('/addevents/{id}')
  @response(200, {
    description: 'Addevent model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Addevent, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Addevent, {exclude: 'where'}) filter?: FilterExcludingWhere<Addevent>
  ): Promise<Addevent> {
    return this.addeventRepository.findById(id, filter);
  }

  @patch('/addevents/{id}')
  @response(204, {
    description: 'Addevent PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Addevent, {partial: true}),
        },
      },
    })
    addevent: Addevent,
  ): Promise<void> {
    await this.addeventRepository.updateById(id, addevent);
  }

  @put('/addevents/{id}')
  @response(204, {
    description: 'Addevent PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() addevent: Addevent,
  ): Promise<void> {
    await this.addeventRepository.replaceById(id, addevent);
  }

  @del('/addevents/{id}')
  @response(204, {
    description: 'Addevent DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.addeventRepository.deleteById(id);
  }
}
