import { MenuComponent } from './MenuComponent';

export class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public createIterator(): IterableIterator<MenuComponent> {
    return this.menuComponents[Symbol.iterator]();
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent): void {
    this.menuComponents.splice(this.menuComponents.indexOf(menuComponent));
  }

  public getChild(index: number): MenuComponent {
    return this.menuComponents[index];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): void {
    console.log(`== ${this.getName()}, ${this.getDescription()}`);
    for (const menu of this.menuComponents) {
      menu.print();
    }
  }
}
