import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TutorialStatus extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  tutorialid?: string;

  @property({
    type: 'string',
  })
  userid?: string;

  @property({
    type: 'string',
  })
  tutorial?: string;

  @property({
    type: Boolean,
  })
  isFinish?: Boolean;

  @property({
    type: 'string',
  })
  timestamp?: string;

  @property({
    type: 'string',
  })
  date?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TutorialStatus>) {
    super(data);
  }
}

export interface TutorialStatusRelations {
  // describe navigational properties here
}

export type TutorialStatusWithRelations = TutorialStatus & TutorialStatusRelations;
