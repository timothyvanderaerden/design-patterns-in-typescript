import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  public cost(): number {
    return .89;
  }
}
