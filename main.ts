import { Command } from 'commander';
import { readdirSync } from 'fs';

const program = new Command();
program.storeOptionsAsProperties(false);
// Dynamically load options
readdirSync('./', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach((dirent) => {
    if (!dirent.name.startsWith('.') && dirent.name !== 'node_modules') {
      program.option(`--${dirent.name}`, `Demo ${dirent.name} pattern.`);
    }
  });
program.parse(process.argv);
const opts = program.opts(); // Since we use storeOptionsAsProperties: false

// Dynamically load demo's
if (Object.keys(opts).length > 0) {
  for (const key of Object.keys(opts)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const demo = require(`./${key}/demo.ts`).default;
    demo();
  }
} else {
  console.log('You need to specify a design pattern.');
  program.help();
}
