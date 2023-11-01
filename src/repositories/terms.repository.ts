import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Terms, TermsRelations} from '../models';

export class TermsRepository extends DefaultCrudRepository<
Terms,
  typeof Terms.prototype.id,
  TermsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Terms, dataSource);
  }
}
