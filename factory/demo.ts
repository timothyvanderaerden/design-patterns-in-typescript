import { NYPizzaStore } from './store/NYPizzaStore';
import { ChicagoPizzaStore } from './store/ChicagoPizzaStore';

export default function demo(): void {
  try {
    const newYorkPizzaStore = new NYPizzaStore();
    newYorkPizzaStore.orderPizza('cheese');
    newYorkPizzaStore.orderPizza('veggie');
    newYorkPizzaStore.orderPizza('clam');
    newYorkPizzaStore.orderPizza('pepperoni');
    newYorkPizzaStore.orderPizza('pineapple');
  } catch (error) {
    console.log(error.message);
  }

  try {
    const chicagoPizzaStore = new ChicagoPizzaStore();
    chicagoPizzaStore.orderPizza('cheese');
    chicagoPizzaStore.orderPizza('veggie');
    chicagoPizzaStore.orderPizza('clam');
    chicagoPizzaStore.orderPizza('pepperoni');
    chicagoPizzaStore.orderPizza('pineapple');
  } catch (error) {
    console.log(error.message);
  }
}
