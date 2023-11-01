import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Terms } from '../models';
import { TermsRepository } from '../repositories';
export declare class TermsController {
    termsRepository: TermsRepository;
    constructor(termsRepository: TermsRepository);
    create(rating: Omit<Terms, 'y'>): Promise<Terms>;
    count(where?: Where<Terms>): Promise<Count>;
    find(filter?: Filter<Terms>): Promise<Terms[]>;
    updateAll(rating: Terms, where?: Where<Terms>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Terms>): Promise<Terms>;
    updateById(id: string, rating: Terms): Promise<void>;
    replaceById(id: string, rating: Terms): Promise<void>;
    deleteById(id: string): Promise<void>;
}
