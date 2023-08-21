import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Cafe, CafeRelations} from '../models';

export class CafeRepository extends DefaultCrudRepository<
  Cafe,
  typeof Cafe.prototype.id,
  CafeRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Cafe, dataSource);
  }
}
