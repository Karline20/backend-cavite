import {Entity, model, property} from '@loopback/repository';

@model()
export class Addevent extends Entity {
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

  constructor(data?: Partial<Addevent>) {
    super(data);
  }
}

export interface AddeventRelations {
  // describe navigational properties here
}

export type AddeventWithRelations = Addevent & AddeventRelations;
