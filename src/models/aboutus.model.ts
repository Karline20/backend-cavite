import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AboutUs extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AboutUs>) {
    super(data);
  }
}

export interface AboutUsRelations {
  // describe navigational properties here
}

export type AboutUsWithRelations = AboutUs & AboutUsRelations;
