import { ICommand } from './ICommand';

export class NoCommand implements ICommand {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public execute(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public undo(): void {}
}
