import { Espresso } from './Espresso';
import { DarkRoast } from './DarkRoast';
import { Mocha } from './condiment/Mocha';
import { Whip } from './condiment/Whip';
import { HouseBlend } from './HouseBlend';
import { Soy } from './condiment/Soy';
import { Decaf } from './Decaf';

export default function demo(): void {
  const beverage1 = new Espresso();
  console.log(`${beverage1.getDescription()}: €${beverage1.cost()}`);

  let beverage2 = new DarkRoast();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  console.log(`${beverage2.getDescription()}: €${beverage2.cost()}`);


  let beverage3 = new HouseBlend();
  beverage3 = new Soy(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Whip(beverage3);
  console.log(`${beverage3.getDescription()}: €${beverage3.cost()}`);

  let beverage4 = new Decaf();
  beverage4 = new Soy(beverage4);
  console.log(`${beverage4.getDescription()}: €${beverage4.cost()}`);
}
