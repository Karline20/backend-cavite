import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Govoffices, GovofficesRelations} from '../models';

export class GovofficesRepository extends DefaultCrudRepository<
  Govoffices,
  typeof Govoffices.prototype.id,
  GovofficesRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Govoffices, dataSource);
  }
}
