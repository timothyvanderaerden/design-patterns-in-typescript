import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverage';

export class SteamedMilk extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Steamed Milk`;
  }

  public cost(): number {
    return this.beverage.cost() + .10;
  }
}
