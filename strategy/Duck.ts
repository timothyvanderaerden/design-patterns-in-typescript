import { IFlyBehavior } from './behavior/fly/IFlyBehavior';
import { IQuackBehavior } from './behavior/quack/IQuackBehavior';

export abstract class Duck {
  declare flyBehavior: IFlyBehavior;
  declare quackBehavior: IQuackBehavior;

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('All ducks float, even decoys!');
  }
}
