#!/usr/bin/env node

const commander = require('commander');
const { readFileSync, writeFileSync }  = require('fs');
const fixCommas = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .usage('[options] <file ...>')
  .option('--fix', 'Overwrite file with fixed code')
  .parse(process.argv);

const { args: files } = commander;

if (!files.length) {
  commander.outputHelp();
  process.exit(0);
}

files.forEach(file => {
  const fixedCode = fixCommas(readFileSync(file, 'utf8'));

  commander.fix ?
    writeFileSync(file, fixedCode, 'utf8') :
    process.stdout.write(fixedCode)
});
