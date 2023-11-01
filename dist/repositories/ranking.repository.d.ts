import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Ranking, RankingRelations } from '../models';
export declare class RankingRepository extends DefaultCrudRepository<Ranking, typeof Ranking.prototype.id, RankingRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
