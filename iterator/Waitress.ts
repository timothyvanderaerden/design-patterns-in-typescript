import { PancakeHouseMenu } from './PancakeHouseMenu';
import { DinerMenu } from './DinerMenu';
import { Iterator } from './Iterator';
import { MenuItem } from './MenuItem';

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

  private printSpecifiedMenu(iterator: Iterator<MenuItem>): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.value.getName()}, ${menuItem.value.getPrice()} -- ${menuItem.value.getDescription()}`);
    }
  }
}
