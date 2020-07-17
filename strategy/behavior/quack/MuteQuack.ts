import { IQuackBehavior } from './IQuackBehavior';

export class MuteQuack implements IQuackBehavior {
  public quack(): void {
    console.log('<< Silence >>');
  }
}
