import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Events, EventsRelations} from '../models';

export class EventsRepository extends DefaultCrudRepository<
  Events,
  typeof Events.prototype.id,
  EventsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Events, dataSource);
  }
}
