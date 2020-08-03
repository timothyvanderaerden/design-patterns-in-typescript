import adapter from './adapter/demo';
import command from './command/demo';
import decorator from './decorator/demo';
import facade from './facade/demo';
import factory from './factory/demo';
import iterator from './iterator/demo';
import observer from './observer/demo';
import singleton from './singleton/demo';
import strategy from './strategy/demo';
import template from './template/demo';
import { Command } from 'commander';

const program = new Command();
program
  .storeOptionsAsProperties(false) // This way we can use --command since it is an existing property of Command
  .option('--adapter', 'Demo adapter pattern.')
  .option('--command', 'Demo command pattern.')
  .option('--decorator', 'Demo decorator pattern.')
  .option('--facade', 'Demo facade pattern.')
  .option('--factory', 'Demo factory pattern.')
  .option('--iterator', 'Demo iterator pattern')
  .option('--observer', 'Demo observer pattern.')
  .option('--singleton', 'Demo singleton pattern.')
  .option('--strategy', 'Demo strategy pattern.')
  .option('--template', 'Demo template pattern.')
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
  case opts.facade:
    facade();
    break;
  case opts.factory:
    factory();
    break;
  case opts.iterator:
    iterator();
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
  case opts.template:
    template();
    break;
  default:
    console.log('You need to specify a design pattern.');
}
