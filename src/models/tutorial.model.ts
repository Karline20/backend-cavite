import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tutorial extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  tutorial?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tutorial>) {
    super(data);
  }
}

export interface TutorialRelations {
  // describe navigational properties here
}

export type TutorialWithRelations = Tutorial & TutorialRelations;
