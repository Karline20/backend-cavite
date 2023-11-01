import { Entity } from '@loopback/repository';
export declare class Addevent extends Entity {
    id?: string;
    name?: string;
    constructor(data?: Partial<Addevent>);
}
export interface AddeventRelations {
}
export type AddeventWithRelations = Addevent & AddeventRelations;
