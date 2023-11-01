import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Researcher, ResearcherRelations} from '../models';

export class ResearcherRepository extends DefaultCrudRepository<
Researcher,
  typeof Researcher.prototype.id,
  ResearcherRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Researcher, dataSource);
  }
}
