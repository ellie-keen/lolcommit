#! /usr/bin/env node

const { getCommitMessage } = require('./commands');

const args = {
  PREFIX: 'prefix',
  COMMIT: 'commit',
};

const executeCommandBasedOnInput = () => {
  const userArgs = process.argv.slice(2).map((arg) => arg.toLowerCase());

  const params = {
    prefix: userArgs.includes(args.PREFIX),
    commit: userArgs.includes(args.COMMIT),
  };

  const argsNotRecognised =
    !userArgs.includes(args.PREFIX) && !userArgs.includes(args.COMMIT);

  if (userArgs.length > 0 && argsNotRecognised) {
    console.log('That command is not recognised');
    return;
  }

  getCommitMessage(params);
};

executeCommandBasedOnInput();
