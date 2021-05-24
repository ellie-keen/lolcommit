#! /usr/bin/env node
const chalk = require('chalk');
const got = require('got');
const simpleGit = require('simple-git');

const git = simpleGit();

const { backupMessages } = require('./backupMessages');
const { generateRandomNumber } = require('../utils/generateRandomNumber');

const getCommitMessage = ({ prefix, commit }) =>
  (async () => {
    const prefixMessage = chalk.yellowBright('lolcommit: ');

    try {
      const response = await got.get('http://whatthecommit.com/index.txt');
      const message = prefix ? prefixMessage + response.body : response.body;

      console.log(
        commit ? `${chalk.yellowBright('Comitting...')} ${message}` : message
      );
      return commit ? git.commit(message) : message;
    } catch (error) {
      const message = prefix
        ? prefixMessage +
          backupMessages[generateRandomNumber(backupMessages.length - 1)]
        : backupMessages[generateRandomNumber(backupMessages.length - 1)];

      console.log(message);
      return commit ? git.commit(message) : message;
    }
  })();

module.exports = { getCommitMessage };
