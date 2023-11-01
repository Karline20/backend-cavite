import { Entity } from '@loopback/repository';
export declare class Rating extends Entity {
    id?: string;
    userid?: string;
    eventid?: string;
    name?: string;
    rate?: number;
    review?: string;
    timestamp?: string;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<Rating>);
}
export interface RatingRelations {
}
export type RatingWithRelations = Rating & RatingRelations;
