import { MallardDuck } from './MallardDuck';
import { RedheadDuck } from './RedheadDuck';
import { RubberDuck } from './RubberDuck';
import { DecoyDuck } from './DecoyDuck';

export default function demo(): void {
  const mallard = new MallardDuck();
  const redhead = new RedheadDuck();
  const rubber = new RubberDuck();
  const decoy = new DecoyDuck();

  mallard.performQuack();
  mallard.performFly();
  mallard.swim();
  mallard.display();

  redhead.performQuack();
  redhead.performFly();
  redhead.swim();
  redhead.display();

  rubber.performQuack();
  rubber.performFly();
  rubber.swim();
  rubber.display();

  decoy.performQuack();
  decoy.performFly();
  decoy.swim();
  decoy.display();
}
