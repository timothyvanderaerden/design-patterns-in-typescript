import { PizzaStore } from '../PizzaStore';
import { Pizza } from '../Pizza';
import { CheesePizza } from '../pizza/CheesePizza';
import { VeggiePizza } from '../pizza/VeggiePizza';
import { ClamPizza } from '../pizza/ClamPizza';
import { PepperoniPizza } from '../pizza/PepperoniPizza';
import { ChicagoPizzaIngredientFactory } from '../ingredient/ChicagoPizzaIngredientFactory';

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    const ingredientFactory = new ChicagoPizzaIngredientFactory();
    let pizza: Pizza;

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    } else {
      throw new Error('Item not found!');
    }
    return pizza;
  }
}
