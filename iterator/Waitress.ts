import { PancakeHouseMenu } from './PancakeHouseMenu';
import { DinerMenu } from './DinerMenu';
import { Iterator } from './Iterator';

export class Waitress {
  private pancakeHouseMenu: PancakeHouseMenu;
  private dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenu(): void {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();

    console.log('MENU');
    console.log('== BREAKFAST');
    this.printSpecifiedMenu(pancakeIterator);
    console.log('== DINER');
    this.printSpecifiedMenu(dinerIterator);
  }

  private printSpecifiedMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
    }
  }
}
