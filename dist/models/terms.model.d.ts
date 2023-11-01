import { Entity } from '@loopback/repository';
export declare class Terms extends Entity {
    id?: string;
    ftitle?: string;
    fdesc?: string;
    stitle?: string;
    sdesc?: string;
    [prop: string]: any;
    constructor(data?: Partial<Terms>);
}
export interface TermsRelations {
}
export type TermsWithRelations = Terms & TermsRelations;
