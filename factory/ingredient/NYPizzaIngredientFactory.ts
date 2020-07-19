import { PizzaIngredientFactory } from '../PizzaIngredientFactory';
import { MarinaraSauce } from './sauce/MarinaraSauce';
import { ReggianoCheese } from './cheese/ReggianoCheese';
import { IVeggie } from './veggie/IVeggie';
import { Garlic } from './veggie/Garlic';
import { Onion } from './veggie/Onion';
import { Mushroom } from './veggie/Mushroom';
import { RedPepper } from './veggie/RedPepper';
import { ThickCrustDough } from './dough/ThickCrustDough';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): ThickCrustDough {
    return new ThickCrustDough();
  }
  createSauce(): MarinaraSauce {
    return new MarinaraSauce();
  }
  createCheese(): ReggianoCheese {
    return new ReggianoCheese();
  }
  createVeggies(): IVeggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createPepperoni(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createClam(): void {}
}
