import { Filter } from '@loopback/repository';
import { Tutorial } from '../models';
import { TutorialRepository } from '../repositories';
export declare class TutorialController {
    tutorialRepository: TutorialRepository;
    constructor(tutorialRepository: TutorialRepository);
    create(tutorial: Omit<Tutorial, 'y'>): Promise<Tutorial>;
    updateById(id: string, tutorial: Tutorial): Promise<void>;
    replaceById(id: string, // Assuming 'id' is a string
    tutorial: Tutorial): Promise<void>;
    find(filter?: Filter<Tutorial>): Promise<Tutorial[]>;
    searchTutorial(searchQuery: string): Promise<Tutorial[]>;
}
