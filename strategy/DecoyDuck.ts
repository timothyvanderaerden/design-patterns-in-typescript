import { Duck } from './Duck';
import { FlyNoWay } from './behavior/fly/FlyNoWay';
import { MuteQuack } from './behavior/quack/MuteQuack';

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  public display(): void {
    console.log('DecoyDuck');
  }
}
