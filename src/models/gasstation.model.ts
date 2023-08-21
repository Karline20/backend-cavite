import {Entity, model, property} from '@loopback/repository';

@model()
export class Gasstation extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  gasName?: string;

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
  date?: string;

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


  constructor(data?: Partial<Gasstation>) {
    super(data);
  }
}

export interface GasstationRelations {
  // describe navigational properties here
}

export type GasstationWithRelations = Gasstation & GasstationRelations;
