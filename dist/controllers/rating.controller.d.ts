import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rating } from '../models';
import { RatingRepository } from '../repositories';
export declare class RatingController {
    ratingRepository: RatingRepository;
    constructor(ratingRepository: RatingRepository);
    create(rating: Omit<Rating, 'y'>): Promise<Rating>;
    count(where?: Where<Rating>): Promise<Count>;
    calculateSum(eventid: string): Promise<{
        totalValue: number;
        averageRating: number;
    }>;
    find(filter?: Filter<Rating>): Promise<Rating[]>;
    updateAll(rating: Rating, where?: Where<Rating>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rating>): Promise<Rating>;
    updateById(id: string, rating: Rating): Promise<void>;
    replaceById(id: string, rating: Rating): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByEventId(eventid: string): Promise<Rating[]>;
    checkExistence(data: {
        userid: string;
        eventid: string;
    }): Promise<string>;
}
