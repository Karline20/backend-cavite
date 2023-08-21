import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Tovisit, TovisitRelations} from '../models';

export class TovisitRepository extends DefaultCrudRepository<
  Tovisit,
  typeof Tovisit.prototype.id,
  TovisitRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Tovisit, dataSource);
  }
}
