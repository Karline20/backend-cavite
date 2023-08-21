import {Entity, model, property} from '@loopback/repository';

@model()
export class Cafe extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  cafeName?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  imageuri?: string;

  @property({
    type: 'string',
  })
  timestamp?: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  date?: string;


  constructor(data?: Partial<Cafe>) {
    super(data);
  }
}

export interface CafeRelations {
  // describe navigational properties here
}

export type CafeWithRelations = Cafe & CafeRelations;
