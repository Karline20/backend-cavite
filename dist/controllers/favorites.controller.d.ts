import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Favorites } from '../models';
import { FavoritesRepository } from '../repositories';
export declare class FavoritesController {
    favoritesRepository: FavoritesRepository;
    constructor(favoritesRepository: FavoritesRepository);
    create(rating: Omit<Favorites, 'y'>): Promise<Favorites>;
    count(where?: Where<Favorites>): Promise<Count>;
    find(filter?: Filter<Favorites>): Promise<Favorites[]>;
    updateAll(rating: Favorites, where?: Where<Favorites>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Favorites>): Promise<Favorites>;
    updateById(id: string, rating: Favorites): Promise<void>;
    replaceById(id: string, rating: Favorites): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByUserId(userid: string): Promise<Favorites[]>;
    checkExistence(data: {
        userid: string;
        eventid: string;
    }): Promise<boolean>;
}
