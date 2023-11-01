import { Entity } from '@loopback/repository';
export declare class AboutUs extends Entity {
    id?: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<AboutUs>);
}
export interface AboutUsRelations {
}
export type AboutUsWithRelations = AboutUs & AboutUsRelations;
