#! /usr/bin/env node

const { defaultCommand } = require("./commands");

switch (process.argv[2]) {
  case 'prefix':
    defaultCommand({ prefix: true });
    break;
  case undefined:
    defaultCommand();
    break;
  default:
    console.log('That command is not recognised');
}
