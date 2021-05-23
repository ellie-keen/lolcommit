#! /usr/bin/env node

const { defaultCommand } = require("./commands");

const args = {
  PREFIX: 'prefix'
};

const firstUserArg = process.argv.slice(2)[0];

switch (firstUserArg) {
  case args.PREFIX:
    defaultCommand({ prefix: true });
    break;
  case undefined:
    defaultCommand();
    break;
  default:
    console.log('That command is not recognised');
}
