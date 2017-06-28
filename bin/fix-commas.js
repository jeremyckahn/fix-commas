#!/usr/bin/env node

const commander = require('commander');
const { readFileSync }  = require('fs');
const fixCommas = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .parse(process.argv);

const { args } = commander;

args.forEach(file =>
  process.stdout.write(
    fixCommas(readFileSync(file, 'utf8'))
  )
);
