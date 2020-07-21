import { ICommand } from '../ICommand';
import { Light } from './Light';

export class LightOffCommand implements ICommand {
  private declare light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}
