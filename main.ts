import adapter from './adapter/demo';
import command from './command/demo';
import decorator from './decorator/demo';
import factory from './factory/demo';
import observer from './observer/demo';
import singleton from './singleton/demo';
import strategy from './strategy/demo';
import { Command } from 'commander';

const program = new Command();
program
  .storeOptionsAsProperties(false) // This way we can use --command since it is an existing property of Command
  .option('--adapter', 'Denmo adapter pattern.')
  .option('--command', 'Demo command pattern.')
  .option('--decorator', 'Demo decorator pattern.')
  .option('--factory', 'Demo factory pattern.')
  .option('--observer', 'Demo observer pattern.')
  .option('--singleton', 'Demo singleton pattern.')
  .option('--strategy', 'Demo strategy pattern.')
  .parse(process.argv);
const opts = program.opts(); // Since we use storeOptionsAsProperties: false

switch(true) {
  case opts.adapter:
    adapter();
    break;
  case opts.command:
    command();
    break;
  case opts.decorator:
    decorator();
    break;
  case opts.factory:
    factory();
    break;
  case opts.observer:
    observer();
    break;
  case opts.singleton:
    singleton();
    break;
  case opts.strategy:
    strategy();
    break;
  default:
    console.log('You need to specify a design pattern.');
}
