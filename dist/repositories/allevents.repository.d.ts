import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Allevents, AlleventsRelations } from '../models';
export declare class AlleventsRepository extends DefaultCrudRepository<Allevents, typeof Allevents.prototype.id, AlleventsRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
