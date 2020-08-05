import { IState } from './state/IState';
import { SoldOutState } from './state/SoldOutState';
import { NoQuarterState } from './state/NoQuarterState';
import { HasQuarterState } from './state/HasQuarterState';
import { SoldState } from './state/SoldState';
import { WinnerState } from './state/WinnerState';

export class GumballMachine {
  private soldOutState: IState;
  private noQuarterState: IState;
  private hasQuarterState: IState;
  private soldState: IState;
  private winnerState: IState;

  private state = this.soldOutState;
  private count = 0;

  constructor(count: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);
    this.count = count;
    if (count > 0) {
      this.state = this.noQuarterState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public setState(state: IState): void {
    this.state = state;
  }

  public releaseBall(): void {
    console.log('A gumball comes rolling out the slot...');
    if (this.count !== 0) {
      this.count--;
    }
  }

  public getSoldOutState(): IState {
    return this.soldOutState;
  }

  public getHasQuarterState(): IState {
    return this.hasQuarterState;
  }

  public getNoQuarterState(): IState {
    return this.noQuarterState;
  }

  public getSoldState(): IState {
    return this.soldState;
  }

  public getWinnerState(): IState {
    return this.winnerState;
  }

  public getCount(): number {
    return this.count;
  }
}
