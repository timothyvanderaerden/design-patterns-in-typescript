import { ICommand } from '../ICommand';
import { Light } from './Light';

export class LightOnCommand implements ICommand {
  private declare light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}
