import { Pizza } from '../Pizza';
import { IPepperoni } from '../ingredient/pepperoni/IPepperoni';
import { PizzaIngredientFactory } from '../PizzaIngredientFactory';

export class PepperoniPizza extends Pizza {
  private declare ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.pepperoni = this.ingredientFactory.createPepperoni() as IPepperoni;
  }
}
