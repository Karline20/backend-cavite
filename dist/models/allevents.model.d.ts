import { Entity } from '@loopback/repository';
export declare class Allevents extends Entity {
    id?: string;
    name?: string;
    description?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    timestamp?: string;
    date?: string;
    category?: string;
    eventcategory?: string;
    imageuri?: string;
    [prop: string]: any;
    constructor(data?: Partial<Allevents>);
}
export interface AlleventsRelations {
}
export type AlleventsWithRelations = Allevents & AlleventsRelations;
