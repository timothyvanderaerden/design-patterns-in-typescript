export abstract class MenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public add(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public remove(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getChild(index: number): MenuComponent {
    throw new Error('Unsupported operation');
  }

  public getName(): string {
    throw new Error('Unsupported operation');
  }

  public getDescription(): string {
    throw new Error('Unsupported operation');
  }

  public getPrice(): number {
    throw new Error('Unsupported operation');
  }

  public isVegetarian(): boolean {
    throw new Error('Unsupported operation');
  }

  public print(): void {
    throw new Error('Unsupported operation');
  }
}
