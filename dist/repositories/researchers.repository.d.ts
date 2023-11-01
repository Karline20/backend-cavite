import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Researcher, ResearcherRelations } from '../models';
export declare class ResearcherRepository extends DefaultCrudRepository<Researcher, typeof Researcher.prototype.id, ResearcherRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
