import { IDough } from './ingredient/dough/IDough';
import { ISauce } from './ingredient/sauce/ISauce';
import { ICheese } from './ingredient/cheese/ICheese';
import { IVeggie } from './ingredient/veggie/IVeggie';
import { IPepperoni } from './ingredient/pepperoni/IPepperoni';
import { IClam } from './ingredient/clam/IClam';

export abstract class Pizza {
  protected toppings: IVeggie[] = [];
  protected declare name: string;
  protected declare dough: IDough;
  protected declare sauce: ISauce;
  protected declare cheese: ICheese;
  protected declare pepperoni: IPepperoni;
  protected declare clam: IClam;

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings:');
    for (const topping of this.toppings) {
      console.log(`   ${topping}`);
    }
  }

  public bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  public cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
