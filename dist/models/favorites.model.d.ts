import { Entity } from '@loopback/repository';
export declare class Favorites extends Entity {
    id?: string;
    userid?: string;
    eventid?: string;
    timestamp?: string;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<Favorites>);
}
export interface FavoritesRelations {
}
export type FavoritesWithRelations = Favorites & FavoritesRelations;
