import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Profile } from '../models';
import { ProfileRepository } from '../repositories';
export declare class ProfileController {
    profileRepository: ProfileRepository;
    constructor(profileRepository: ProfileRepository);
    create(profile: Omit<Profile, 'id'>): Promise<Profile>;
    find(filter?: Filter<Profile>): Promise<Profile[]>;
    findById(id: string, filter?: FilterExcludingWhere<Profile>): Promise<Profile>;
    updateById(id: string, profile: Profile): Promise<void>;
    replaceById(id: string, profile: Profile): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByUserId(userid: string, filter?: Filter<Profile>): Promise<Profile | undefined>;
}
