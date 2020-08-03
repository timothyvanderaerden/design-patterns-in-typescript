import { PancakeHouseMenu } from './PancakeHouseMenu';
import { DinerMenu } from './DinerMenu';
import { Waitress } from './Waitress';

export default function demo(): void {
  const pancakeHouseMenu = new PancakeHouseMenu();
  const dinerMenu = new DinerMenu();
  const waitress = new Waitress(pancakeHouseMenu, dinerMenu);

  waitress.printMenu();
}
