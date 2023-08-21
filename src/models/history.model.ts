import {Entity, model, property} from '@loopback/repository';

@model()
export class History extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  historName?: string;

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

  @property({
    type: 'string',
  })
  category?: string;


  constructor(data?: Partial<History>) {
    super(data);
  }
}

export interface HistoryRelations {
  // describe navigational properties here
}

export type HistoryWithRelations = History & HistoryRelations;
