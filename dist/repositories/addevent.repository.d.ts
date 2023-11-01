import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Addevent, AddeventRelations } from '../models';
export declare class AddeventRepository extends DefaultCrudRepository<Addevent, typeof Addevent.prototype.id, AddeventRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
