import { Beverage } from './Beverage';

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Darkroast';
  }

  public cost(): number {
    return .99;
  }
}
