#!/usr/bin/env node

const commander = require('commander');
const { readFileSync, writeFileSync }  = require('fs');
const fixCommas = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .option('--fix', 'Overwrite file with fixed code')
  .parse(process.argv);

const { args } = commander;

args.forEach(file => {
  const fixedCode = fixCommas(readFileSync(file, 'utf8'));

  if (commander.fix) {
    writeFileSync(file, fixedCode, 'utf8')
  } else {
    process.stdout.write(fixedCode)
  }
});
