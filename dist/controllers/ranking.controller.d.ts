import { Count, Filter, Where } from '@loopback/repository';
import { Ranking } from '../models';
import { RankingRepository } from '../repositories';
export declare class RankingController {
    rankingRepository: RankingRepository;
    constructor(rankingRepository: RankingRepository);
    create(rating: Omit<Ranking, 'y'>): Promise<Ranking>;
    count(where?: Where<Ranking>): Promise<Count>;
    find(filter?: Filter<Ranking>): Promise<Ranking[]>;
    updateById(id: string, rating: Ranking): Promise<void>;
    findByUserId(userid: string, filter?: Filter<Ranking>): Promise<Ranking | undefined>;
    checkExistence(userid: string): Promise<boolean>;
    getRankingsByScore(): Promise<Ranking[]>;
}
