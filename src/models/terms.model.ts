import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Terms extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  ftitle?: string;

  @property({
    type: 'string',
  })
  fdesc?: string;

  @property({
    type: 'string',
  })
  stitle?: string;

  @property({
    type: 'string',
  })
  sdesc?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Terms>) {
    super(data);
  }
}

export interface TermsRelations {
  // describe navigational properties here
}

export type TermsWithRelations = Terms & TermsRelations;
