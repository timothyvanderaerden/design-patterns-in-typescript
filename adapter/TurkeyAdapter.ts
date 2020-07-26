import { IDuck } from './IDuck';
import { ITurkey } from './ITurkey';

export class TurkeyAdapter implements IDuck {
  private turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
