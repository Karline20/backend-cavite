import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Allevents, AlleventsRelations} from '../models';

export class AlleventsRepository extends DefaultCrudRepository<
  Allevents,
  typeof Allevents.prototype.id,
  AlleventsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Allevents, dataSource);
  }
}
