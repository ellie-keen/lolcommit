#! /usr/bin/env node

const { prefixCommand, defaultCommand } = require("./bin/index");


switch (process.argv[2]) {
  case 'prefix':
    prefixCommand();
    break;
  case undefined:
    defaultCommand();
    break;
  default:
    console.log('CONFUSED!');
}