#! /usr/bin/env node

const { getCommitMessage } = require('./commands');

const args = {
  PREFIX: 'prefix',
  COMMIT: 'commit',
};

const firstUserArg = process.argv.slice(2)[0];

switch (firstUserArg) {
  case args.PREFIX:
    getCommitMessage({ prefix: true, commit: false });
    break;
  case args.COMMIT:
    getCommitMessage({ prefix: false, commit: true });
    break;
  case undefined:
    getCommitMessage({ prefix: false, commit: false });
    break;
  default:
    console.log('That command is not recognised');
}
