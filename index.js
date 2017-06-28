#!/usr/bin/env node

const { echo } = require('shelljs');
const { fixCommas } = require('./lib/index');
const { version } = require('./package.json');

var commander = require('commander');

commander
  .version(version)
  .parse(process.argv);

const { args } = commander;

echo(
  fixCommas(args)
);
