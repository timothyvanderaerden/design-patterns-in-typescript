import { PizzaStore } from '../PizzaStore';
import { Pizza } from '../Pizza';
import { NYPizzaIngredientFactory } from '../ingredient/NYPizzaIngredientFactory';
import { CheesePizza } from '../pizza/CheesePizza';
import { VeggiePizza } from '../pizza/VeggiePizza';
import { ClamPizza } from '../pizza/ClamPizza';
import { PepperoniPizza } from '../pizza/PepperoniPizza';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    const ingredientFactory = new NYPizzaIngredientFactory();
    let pizza: Pizza;

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('NY Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('NY Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('NY Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('NY Style Pepperoni Pizza');
    } else {
      throw new Error('Item not found!');
    }
    return pizza;
  }
}
