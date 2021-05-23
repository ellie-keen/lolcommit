#! /usr/bin/env node

const { getCommitMessage } = require("./commands");

const args = {
  PREFIX: 'prefix'
};

const firstUserArg = process.argv.slice(2)[0];

switch (firstUserArg) {
  case args.PREFIX:
    getCommitMessage({ prefix: true });
    break;
  case undefined:
    getCommitMessage();
    break;
  default:
    console.log('That command is not recognised');
}
