import { ICommand } from './ICommand';
import { NoCommand } from './NoCommand';

export class RemoteControl {
  private onCommands: ICommand[];
  private offCommands: ICommand[];
  private undoCommand: ICommand;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }
}
