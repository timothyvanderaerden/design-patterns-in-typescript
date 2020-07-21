import { ICommand } from '../ICommand';
import { CeilingFan } from './CeilingFan';

export class CeilingFanOffCommand implements ICommand {
  private ceilingFan: CeilingFan;
  private declare prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  public undo(): void {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high();
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low();
    } else if (this.prevSpeed === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
  }
}
