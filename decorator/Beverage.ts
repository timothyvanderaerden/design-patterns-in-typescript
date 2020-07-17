export abstract class Beverage {
  protected description = 'Unknown Beverage';

  public abstract cost(): number;

  public getDescription(): string {
    return this.description;
  }
}
