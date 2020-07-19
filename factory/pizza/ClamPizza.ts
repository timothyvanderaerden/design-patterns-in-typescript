import { Pizza } from '../Pizza';
import { PizzaIngredientFactory } from '../PizzaIngredientFactory';
import { IClam } from '../ingredient/clam/IClam';

export class ClamPizza extends Pizza {
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
    this.clam = this.ingredientFactory.createClam() as IClam;
  }
}
