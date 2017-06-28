#!/usr/bin/env node

const commander = require('commander');
const { echo } = require('shelljs');
const fixCommas = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .parse(process.argv);

const { args } = commander;

echo(
  fixCommas(args)
);
