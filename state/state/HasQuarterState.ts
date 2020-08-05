import { IState } from './IState';
import { GumballMachine } from '../GumballMachine';

export class HasQuarterState implements IState {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('You can\'t insert another quarter');
  }

  ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log('You turned...');
    const randomWinner = Math.random();
    if (randomWinner < 0.10 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log('No gumball dispensed');
  }
}
