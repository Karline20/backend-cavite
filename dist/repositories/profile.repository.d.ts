import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Profile, ProfileRelations } from '../models';
export declare class ProfileRepository extends DefaultCrudRepository<Profile, typeof Profile.prototype.id, ProfileRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
