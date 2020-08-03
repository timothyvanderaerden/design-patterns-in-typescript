export class Iterator<T> {
  private iterator: IterableIterator<T>;
  private index = 0;
  private length: number;

  constructor(items: T[]) {
    this.iterator = items[Symbol.iterator]();
    this.length = items.length;
  }

  public hasNext(): boolean {
    return this.index < this.length;
  }

  public next(): IteratorResult<T, T> {
    this.index++;
    return this.iterator.next();
  }
}
