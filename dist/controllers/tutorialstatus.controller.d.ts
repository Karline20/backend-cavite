import { TutorialStatus } from '../models';
import { TutorialStatusRepository } from '../repositories';
export declare class TutorialStatusController {
    tutorialStatusRepository: TutorialStatusRepository;
    constructor(tutorialStatusRepository: TutorialStatusRepository);
    create(rating: Omit<TutorialStatus, 'y'>): Promise<TutorialStatus>;
    findByTutorialIdAndUserId(tutorialid: string, userid: string): Promise<TutorialStatus | null>;
}
