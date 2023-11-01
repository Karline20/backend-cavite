import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { TutorialStatus, TutorialStatusRelations } from '../models';
export declare class TutorialStatusRepository extends DefaultCrudRepository<TutorialStatus, typeof TutorialStatus.prototype.id, TutorialStatusRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
