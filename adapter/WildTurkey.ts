import { ITurkey } from './ITurkey';

export class WildTurkey implements ITurkey {
  public gobble(): void {
    console.log('Gobble gobble');
  }

  public fly(): void {
    console.log('I\'m flying short distances');
  }
}
