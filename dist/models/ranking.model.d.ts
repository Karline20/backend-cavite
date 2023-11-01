import { Entity } from '@loopback/repository';
export declare class Ranking extends Entity {
    id?: string;
    userid?: string;
    name?: string;
    score?: number;
    timestamp?: string;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<Ranking>);
}
export interface RankingRelations {
}
export type RankingWithRelations = Ranking & RankingRelations;
