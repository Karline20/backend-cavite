import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Festival, FestivalRelations} from '../models';

export class FestivalRepository extends DefaultCrudRepository<
  Festival,
  typeof Festival.prototype.id,
  FestivalRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Festival, dataSource);
  }
}
