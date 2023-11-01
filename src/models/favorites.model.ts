import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Favorites extends Entity {
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
  eventid?: string;

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

  constructor(data?: Partial<Favorites>) {
    super(data);
  }
}

export interface FavoritesRelations {
  // describe navigational properties here
}

export type FavoritesWithRelations = Favorites & FavoritesRelations;
