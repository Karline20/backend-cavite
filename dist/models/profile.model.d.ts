import { Entity } from '@loopback/repository';
export declare class Profile extends Entity {
    id?: string;
    userid?: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    age?: string;
    gender?: string;
    timestamp?: string;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<Profile>);
}
export interface ProfileRelations {
}
export type ProfileWithRelations = Profile & ProfileRelations;
