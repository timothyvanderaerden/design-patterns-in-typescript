export class CeilingFan {
  public static HIGH = 3;
  public static MEDIUM = 2;
  public static LOW = 1;
  public static OFF = 0;
  private location: string;
  private speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} fan is on high`);
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} fan is on medium`);
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} fan is on low`);
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} fan is off`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}
