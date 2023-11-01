import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Researcher } from '../models';
import { ResearcherRepository } from '../repositories';
export declare class ResearcherController {
    researcherRepository: ResearcherRepository;
    constructor(researcherRepository: ResearcherRepository);
    create(rating: Omit<Researcher, 'y'>): Promise<Researcher>;
    count(where?: Where<Researcher>): Promise<Count>;
    find(filter?: Filter<Researcher>): Promise<Researcher[]>;
    updateAll(rating: Researcher, where?: Where<Researcher>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Researcher>): Promise<Researcher>;
    updateById(id: string, rating: Researcher): Promise<void>;
    replaceById(id: string, rating: Researcher): Promise<void>;
    deleteById(id: string): Promise<void>;
}
