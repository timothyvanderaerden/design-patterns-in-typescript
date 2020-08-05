import { IState } from './IState';
import { GumballMachine } from '../GumballMachine';

export class WinnerState implements IState {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('Please wait, we\'re already giving you a gumball');
  }

  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank');
  }

  turnCrank(): void {
    console.log('Turning twice doesn\'t get you another gumball');
  }

  dispense(): void {
    console.log('You\'re a winner! You get two gumballs for your quarter');
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('Oops, out of gumballs');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}
