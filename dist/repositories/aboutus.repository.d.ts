import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { AboutUs, AboutUsRelations } from '../models';
export declare class AboutUsRepository extends DefaultCrudRepository<AboutUs, typeof AboutUs.prototype.id, AboutUsRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
