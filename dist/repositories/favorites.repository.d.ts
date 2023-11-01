import { DefaultCrudRepository } from '@loopback/repository';
import { PostgreSqlDataSource } from '../datasources';
import { Favorites, FavoritesRelations } from '../models';
export declare class FavoritesRepository extends DefaultCrudRepository<Favorites, typeof Favorites.prototype.id, FavoritesRelations> {
    constructor(dataSource: PostgreSqlDataSource);
}
