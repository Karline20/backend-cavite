import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Researcher extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  position?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Researcher>) {
    super(data);
  }
}

export interface ResearcherRelations {
  // describe navigational properties here
}

export type ResearcherWithRelations = Researcher & ResearcherRelations;
