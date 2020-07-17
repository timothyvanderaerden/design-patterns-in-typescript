import observer from './observer/demo';
import strategy from './strategy/demo';
import { Command } from 'commander';

const program = new Command();
program
  .option('--observer', 'Demo observer pattern.')
  .option('--strategy', 'Demo strategy pattern.')
  .parse(process.argv);

switch(true) {
  case program.observer:
    observer();
    break;
  case program.strategy:
    strategy();
    break;
  default:
    console.log('You need to specify a design pattern.');
}
