import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Rating, RatingRelations } from '../models';
export declare class RatingRepository extends DefaultCrudRepository<Rating, typeof Rating.prototype.id, RatingRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
