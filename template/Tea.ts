import { CaffeineBeverage } from './CaffeineBeverage';

export class Tea extends CaffeineBeverage {
  public brew(): void {
    console.log('Steeping the tea');
  }

  public addCondiments(): void {
    console.log('Adding lemon');
  }
}
