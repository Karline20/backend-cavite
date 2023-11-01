import { Entity } from '@loopback/repository';
export declare class Tutorial extends Entity {
    id?: string;
    tutorial?: string;
    [prop: string]: any;
    constructor(data?: Partial<Tutorial>);
}
export interface TutorialRelations {
}
export type TutorialWithRelations = Tutorial & TutorialRelations;
