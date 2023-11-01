import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Ranking, RankingRelations} from '../models';

export class RankingRepository extends DefaultCrudRepository<
  Ranking,
  typeof Ranking.prototype.id,
  RankingRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Ranking, dataSource);
  }
}
