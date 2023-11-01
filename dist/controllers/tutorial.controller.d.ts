import { Filter } from '@loopback/repository';
import { Tutorial } from '../models';
import { TutorialRepository } from '../repositories';
export declare class TutorialController {
    tutorialRepository: TutorialRepository;
    constructor(tutorialRepository: TutorialRepository);
    create(tutorial: Omit<Tutorial, 'y'>): Promise<Tutorial>;
    find(filter?: Filter<Tutorial>): Promise<Tutorial[]>;
}
