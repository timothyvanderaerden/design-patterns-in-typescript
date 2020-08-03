import { Menu } from './Menu';
import { Waitress } from './Waitress';
import { MenuComponent } from './MenuComponent';
import { MenuItem } from './MenuItem';

export default function demo(): void {
  const pancakeHouseMenu = new Menu('Pancake House Menu', 'Breakfast');
  const dinerMenu = new Menu('Diner Menu', 'Diner');
  const cafeMenu = new Menu('Cafe Menu', 'Cafe');
  const dessertMenu = new Menu('Dessert Menu', 'Dessert of course');

  const allMenus: MenuComponent = new Menu('All Menus', 'All menus combined');
  allMenus.add(pancakeHouseMenu);
  allMenus.add(dinerMenu);
  allMenus.add(cafeMenu);
  allMenus.add(dessertMenu);

  pancakeHouseMenu.add(new MenuItem('K&B\'s Pancake Breakfast', 'Pancakes with scrambled eggs, and toast', true, 2.99));
  pancakeHouseMenu.add(new MenuItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99));
  dinerMenu.add(new MenuItem('Vegetarian BLT', '(Fakin\') Bacon with lettuce & tomato on whole wheat', true, 2.99));
  dinerMenu.add(new MenuItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99));
  cafeMenu.add(new MenuItem('Express', 'Coffee from machine', false, 0.99));
  dessertMenu.add(new MenuItem('Apple Pie', 'Apple pie with a flakey crust', true, 1.59));

  const waitress = new Waitress(allMenus);

  waitress.printVegetarianMenu();
}
