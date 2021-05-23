#! /usr/bin/env node

const { prefixCommand, defaultCommand } = require("./commands");

switch (process.argv[2]) {
  case 'prefix':
    prefixCommand();
    break;
  case undefined:
    defaultCommand();
    break;
  default:
    console.log('That command is not recognised');
}
