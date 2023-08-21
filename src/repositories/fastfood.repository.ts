import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Fastfood, FastfoodRelations} from '../models';

export class FastfoodRepository extends DefaultCrudRepository<
  Fastfood,
  typeof Fastfood.prototype.id,
  FastfoodRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Fastfood, dataSource);
  }
}
