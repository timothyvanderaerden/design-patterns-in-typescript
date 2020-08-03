import { MenuComponent } from './MenuComponent';

export class Waitress {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): void {
    this.allMenus.print();
  }

  public printVegetarianMenu(): void {
    const iterator = this.allMenus.createIterator();
    let menu = iterator.next();
    console.log('== VEGETARIAN MENU');
    while (menu.value) {
      const menuComponentIterator = menu.value.createIterator();
      let menuComponent = menuComponentIterator.next();
      while (menuComponent.value) {
        try {
          if (menuComponent.value.isVegetarian()) {
            menuComponent.value.print();
          }
        // eslint-disable-next-line no-empty
        } catch (error) {}
        menuComponent = menuComponentIterator.next();
      }
      menu = iterator.next();
    }
  }
}
