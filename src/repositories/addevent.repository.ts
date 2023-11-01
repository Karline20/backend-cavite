import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Addevent, AddeventRelations} from '../models';

export class AddeventRepository extends DefaultCrudRepository<
  Addevent,
  typeof Addevent.prototype.id,
  AddeventRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Addevent, dataSource);
  }
}
