import {Entity, model, property} from '@loopback/repository';

@model()
export class Restaurants extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  restaurantName?: string;

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


  constructor(data?: Partial<Restaurants>) {
    super(data);
  }
}

export interface RestaurantsRelations {
  // describe navigational properties here
}

export type RestaurantsWithRelations = Restaurants & RestaurantsRelations;
