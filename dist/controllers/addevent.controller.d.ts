import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Addevent } from '../models';
import { AddeventRepository } from '../repositories';
export declare class AddeventController {
    addeventRepository: AddeventRepository;
    constructor(addeventRepository: AddeventRepository);
    create(addevent: Omit<Addevent, 'id'>): Promise<Addevent>;
    count(where?: Where<Addevent>): Promise<Count>;
    find(filter?: Filter<Addevent>): Promise<Addevent[]>;
    updateAll(addevent: Addevent, where?: Where<Addevent>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Addevent>): Promise<Addevent>;
    updateById(id: string, addevent: Addevent): Promise<void>;
    replaceById(id: string, addevent: Addevent): Promise<void>;
    deleteById(id: string): Promise<void>;
}
