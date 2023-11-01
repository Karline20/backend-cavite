import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Ranking extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  userid?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  score?: number;

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

  constructor(data?: Partial<Ranking>) {
    super(data);
  }
}

export interface RankingRelations {
  // describe navigational properties here
}

export type RankingWithRelations = Ranking & RankingRelations;
