#! /usr/bin/env node
const chalk = require('chalk');
const got = require('got')

const { backupMessages } = require("./backupMessages");
const { generateRandomNumber } = require("../utils/generateRandomNumber");

const getCommitMessage = (prefix) => (async () => {
	const prefixMessage = chalk.yellowBright('lolcommit: ');

	try {
		const response = await got('http://whatthecommit.com/index.txt');
		console.log(prefix ? prefixMessage + response.body : response.body);
	} catch (error) {
		console.log(prefix ? prefixMessage + backupMessages[generateRandomNumber(backupMessages.length - 1)] :
		backupMessages[generateRandomNumber(backupMessages)]);
	}
})();

const defaultCommand = (prefix) => {
	prefix ? getCommitMessage(prefix) : getCommitMessage();
};

module.exports = { defaultCommand };