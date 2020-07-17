import { IQuackBehavior } from './IQuackBehavior';

export class Quack implements IQuackBehavior {
  public quack(): void {
    console.log('Quack');
  }
}
