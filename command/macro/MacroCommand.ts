import { ICommand } from '../ICommand';

export class MacroCommand implements ICommand {
  private commands: ICommand[];

  constructor(commands: ICommand[]) {
    this.commands = commands;
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public undo(): void {}
}
