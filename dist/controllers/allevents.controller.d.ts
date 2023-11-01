import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Allevents } from '../models';
import { AlleventsRepository } from '../repositories';
export declare class AlleventsController {
    alleventsRepository: AlleventsRepository;
    constructor(alleventsRepository: AlleventsRepository);
    create(allevents: Omit<Allevents, 'id'>): Promise<Allevents>;
    count(where?: Where<Allevents>): Promise<Count>;
    find(filter?: Filter<Allevents>): Promise<Allevents[]>;
    updateAll(allevents: Allevents, where?: Where<Allevents>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Allevents>): Promise<Allevents>;
    updateById(id: string, allevents: Allevents): Promise<void>;
    replaceById(id: string, allevents: Allevents): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByEventId(eventcategory: string): Promise<Allevents[]>;
    countByCategory(eventcategory: string): Promise<Count>;
    searchEvents(searchQuery: string, eventcategory: string): Promise<Allevents[]>;
    findByEventIdCate(category: string): Promise<Allevents[]>;
    searchEventsCategory(searchQuery: string, eventcategory: string, category: string): Promise<Allevents[]>;
}
