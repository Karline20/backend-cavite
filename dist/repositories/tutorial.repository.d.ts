import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Tutorial, TutorialRelations } from '../models';
export declare class TutorialRepository extends DefaultCrudRepository<Tutorial, typeof Tutorial.prototype.id, TutorialRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
