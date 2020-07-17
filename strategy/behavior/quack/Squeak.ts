import { IQuackBehavior } from './IQuackBehavior';

export class Squeak implements IQuackBehavior {
  public quack(): void {
    console.log('Squeak');
  }
}
