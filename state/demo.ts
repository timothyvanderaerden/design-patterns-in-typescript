import { GumballMachine } from './GumballMachine';

export default function demo(): void {
  const gumballMachine = new GumballMachine(5);

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.insertQuarter();
  gumballMachine.ejectQuarter();
  gumballMachine.turnCrank();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.ejectQuarter();

  gumballMachine.insertQuarter();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
}
