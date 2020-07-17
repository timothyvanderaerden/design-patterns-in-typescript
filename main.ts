import strategy from './strategy/demo';
import { Command } from 'commander';

const program = new Command();
program
  .option('--strategy', 'Demo strategy pattern.')
  .parse(process.argv);

if (program.strategy) {
  strategy();
}
