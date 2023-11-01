import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Tutorial, TutorialRelations} from '../models';

export class TutorialRepository extends DefaultCrudRepository<
Tutorial,
  typeof Tutorial.prototype.id,
  TutorialRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Tutorial, dataSource);
  }
}
