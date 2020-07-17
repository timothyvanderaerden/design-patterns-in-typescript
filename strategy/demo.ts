import { MallardDuck } from './MallardDuck';
import { RedheadDuck } from './RedheadDuck';
import { RubberDuck } from './RubberDuck';
import { DecoyDuck } from './DecoyDuck';

export default function demo(): void {
  const mallard = new MallardDuck();
  const redhead = new RedheadDuck();
  const rubber = new RubberDuck();
  const decoy = new DecoyDuck();

  mallard.display();
  mallard.performQuack();
  mallard.performFly();
  mallard.swim();

  redhead.display();
  redhead.performQuack();
  redhead.performFly();
  redhead.swim();

  rubber.display();
  rubber.performQuack();
  rubber.performFly();
  rubber.swim();

  decoy.display();
  decoy.performQuack();
  decoy.performFly();
  decoy.swim();
}
