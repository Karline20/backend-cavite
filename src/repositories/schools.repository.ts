import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Schools, SchoolsRelations} from '../models';

export class SchoolsRepository extends DefaultCrudRepository<
  Schools,
  typeof Schools.prototype.id,
  SchoolsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Schools, dataSource);
  }
}
