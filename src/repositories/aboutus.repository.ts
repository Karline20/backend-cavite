import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {AboutUs, AboutUsRelations} from '../models';

export class AboutUsRepository extends DefaultCrudRepository<
AboutUs,
  typeof AboutUs.prototype.id,
  AboutUsRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(AboutUs, dataSource);
  }
}
