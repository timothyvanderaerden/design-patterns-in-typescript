import { PizzaIngredientFactory } from '../PizzaIngredientFactory';
import { ThinCrustDough } from './dough/ThinCrustDough';
import { IVeggie } from './veggie/IVeggie';
import { Garlic } from './veggie/Garlic';
import { Onion } from './veggie/Onion';
import { Mushroom } from './veggie/Mushroom';
import { RedPepper } from './veggie/RedPepper';
import { PlumTomatoSauce } from './sauce/PlumTomatoSauce';
import { MozzarellaCheese } from './cheese/MozzarellaCheese';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): ThinCrustDough {
    return new ThinCrustDough();
  }
  createSauce(): PlumTomatoSauce {
    return new PlumTomatoSauce();
  }
  createCheese(): MozzarellaCheese {
    return new MozzarellaCheese();
  }
  createVeggies(): IVeggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createPepperoni(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createClam(): void {}
}
