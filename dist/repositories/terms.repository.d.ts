import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Terms, TermsRelations } from '../models';
export declare class TermsRepository extends DefaultCrudRepository<Terms, typeof Terms.prototype.id, TermsRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
