import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreSqlDataSource} from '../datasources';
import {Favorites, FavoritesRelations} from '../models';

export class FavoritesRepository extends DefaultCrudRepository<
Favorites,
  typeof Favorites.prototype.id,
  FavoritesRelations
> {
  constructor(
    @inject('datasources.postgreSQL') dataSource: PostgreSqlDataSource,
  ) {
    super(Favorites, dataSource);
  }
}
