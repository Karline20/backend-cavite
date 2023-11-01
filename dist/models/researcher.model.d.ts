import { Entity } from '@loopback/repository';
export declare class Researcher extends Entity {
    id?: string;
    name?: string;
    position?: string;
    address?: string;
    contact?: string;
    [prop: string]: any;
    constructor(data?: Partial<Researcher>);
}
export interface ResearcherRelations {
}
export type ResearcherWithRelations = Researcher & ResearcherRelations;
