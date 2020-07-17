import { Duck } from './Duck';
import { FlyNoWay } from './behavior/fly/FlyNoWay';
import { Squeak } from './behavior/quack/Squeak';

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  public display(): void {
    console.log('== RubberDuck:');
  }
}
