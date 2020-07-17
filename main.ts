import observer from './observer/demo';
import strategy from './strategy/demo';
import { Command } from 'commander';

const program = new Command();
program
  .option('--observer', 'Demo observer pattern.')
  .option('--strategy', 'Demo strategy pattern.')
  .parse(process.argv);


if (program.observer) {
  observer();
} else if (program.strategy) {
  strategy();
} else {
  console.log('You need to specify a design pattern.');
}
