import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Restaurants, RestaurantsRelations} from '../models';

export class RestaurantsRepository extends DefaultCrudRepository<
  Restaurants,
  typeof Restaurants.prototype.id,
  RestaurantsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Restaurants, dataSource);
  }
}
