import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Gasstation, GasstationRelations} from '../models';

export class GasstationRepository extends DefaultCrudRepository<
  Gasstation,
  typeof Gasstation.prototype.id,
  GasstationRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Gasstation, dataSource);
  }
}
