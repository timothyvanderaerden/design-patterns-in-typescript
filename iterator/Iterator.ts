import { MenuItem } from './MenuItem';

export class Iterator {
  private items: MenuItem[];
  private index = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  public hasNext(): boolean {
    return this.index < this.items.length;
  }

  public next(): MenuItem {
    return this.items[this.index++];
  }
}
