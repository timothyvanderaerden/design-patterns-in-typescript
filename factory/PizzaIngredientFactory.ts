import { IDough } from './ingredient/dough/IDough';
import { ISauce } from './ingredient/sauce/ISauce';
import { ICheese } from './ingredient/cheese/ICheese';
import { IVeggie } from './ingredient/veggie/IVeggie';
import { IPepperoni } from './ingredient/pepperoni/IPepperoni';
import { IClam } from './ingredient/clam/IClam';

export interface PizzaIngredientFactory {
  createDough(): IDough;
  createSauce(): ISauce;
  createCheese(): ICheese;
  createVeggies(): IVeggie[];
  createPepperoni(): IPepperoni | void;
  createClam(): IClam | void;
}
