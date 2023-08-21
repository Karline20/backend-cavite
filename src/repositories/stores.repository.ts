import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Stores, StoresRelations} from '../models';

export class StoresRepository extends DefaultCrudRepository<
  Stores,
  typeof Stores.prototype.id,
  StoresRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Stores, dataSource);
  }
}
