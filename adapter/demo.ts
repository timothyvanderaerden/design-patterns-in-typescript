import { MallardDuck } from './MallardDuck';
import { WildTurkey } from './WildTurkey';
import { TurkeyAdapter } from './TurkeyAdapter';
import { IDuck } from './IDuck';

export default function demo(): void {
  const duck = new MallardDuck();

  const turkey = new WildTurkey();
  const turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

  console.log('The turkey says...');
  turkey.gobble();
  turkey.fly();

  console.log('The Duck says...');
  duck.quack();
  duck.fly();

  console.log('The TurkeyAdapter says...');
  turkeyAdapter.quack();
  turkeyAdapter.fly();
}
