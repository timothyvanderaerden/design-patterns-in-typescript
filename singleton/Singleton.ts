export class Singleton {
  private static declare uniqueInstance;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton();
    }

    return this.uniqueInstance;
  }
}
