import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Homemadefood, HomemadefoodRelations} from '../models';

export class HomemadefoodRepository extends DefaultCrudRepository<
  Homemadefood,
  typeof Homemadefood.prototype.id,
  HomemadefoodRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Homemadefood, dataSource);
  }
}
