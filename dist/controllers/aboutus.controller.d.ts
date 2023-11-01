import { FilterExcludingWhere } from '@loopback/repository';
import { AboutUs } from '../models';
import { AboutUsRepository } from '../repositories';
export declare class AboutUsController {
    aboutusRepository: AboutUsRepository;
    constructor(aboutusRepository: AboutUsRepository);
    create(rating: Omit<AboutUs, 'y'>): Promise<AboutUs>;
    findById(id: string, filter?: FilterExcludingWhere<AboutUs>): Promise<AboutUs>;
    updateById(id: string, rating: AboutUs): Promise<void>;
    deleteById(id: string): Promise<void>;
}
