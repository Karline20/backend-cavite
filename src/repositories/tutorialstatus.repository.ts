import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {TutorialStatus, TutorialStatusRelations} from '../models';

export class TutorialStatusRepository extends DefaultCrudRepository<
TutorialStatus,
  typeof TutorialStatus.prototype.id,
  TutorialStatusRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(TutorialStatus, dataSource);
  }
}
