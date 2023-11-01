import {
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {AboutUs} from '../models';
import {AboutUsRepository} from '../repositories';

export class AboutUsController {
  constructor(
    @repository(AboutUsRepository)
    public aboutusRepository: AboutUsRepository,
  ) { }

  @post('/aboutus')
  @response(200, {
    description: 'AboutUs model instance',
    content: {'application/json': {schema: getModelSchemaRef(AboutUs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AboutUs, {
            title: 'NewAboutUs',
            exclude: ['y'],
          }),
        },
      },
    })
    rating: Omit<AboutUs, 'y'>,
  ): Promise<AboutUs> {
    return this.aboutusRepository.create(rating);
  }

  @get('/aboutus/{id}')
  @response(200, {
    description: 'AboutUs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AboutUs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AboutUs, {exclude: 'where'}) filter?: FilterExcludingWhere<AboutUs>
  ): Promise<AboutUs> {
    return this.aboutusRepository.findById(id, filter);
  }

  @patch('/aboutus/{id}')
  @response(204, {
    description: 'AboutUs PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AboutUs, {partial: true}),
        },
      },
    })
    rating: AboutUs,
  ): Promise<void> {
    await this.aboutusRepository.updateById(id, rating);
  }

  @del('/aboutus/{id}')
  @response(204, {
    description: 'AboutUs DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.aboutusRepository.deleteById(id);
  }

}
