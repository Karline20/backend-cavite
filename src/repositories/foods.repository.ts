import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Foods, FoodsRelations} from '../models';

export class FoodsRepository extends DefaultCrudRepository<
  Foods,
  typeof Foods.prototype.id,
  FoodsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Foods, dataSource);
  }
}
