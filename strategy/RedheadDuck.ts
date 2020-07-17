import { Duck } from './Duck';
import { FlyWithWings } from './behavior/fly/FlyWithWings';
import { Quack } from './behavior/quack/Quack';

export class RedheadDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('== RedheadDuck:');
  }
}
