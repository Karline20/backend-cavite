import { Entity } from '@loopback/repository';
export declare class TutorialStatus extends Entity {
    id?: string;
    tutorialid?: string;
    userid?: string;
    tutorial?: string;
    isFinish?: Boolean;
    timestamp?: string;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<TutorialStatus>);
}
export interface TutorialStatusRelations {
}
export type TutorialStatusWithRelations = TutorialStatus & TutorialStatusRelations;
