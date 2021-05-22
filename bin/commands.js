#! /usr/bin/env node
const got = require('got')

const { backupMessages } = require("./backupMessages");

const generateRandomNumber = Math.floor(Math.random() * (backupMessages.length - 1));


const getCommitMessage = (prefix) => (async () => {
	const prefixMessage = 'LOLCOMMIT: '

	try {
		const response = await got('http://whatthecommit.com/index.txt');
		console.log(prefix ? prefixMessage + response.body : response.body);
	} catch (error) {
		console.log(prefix ? prefixMessage + backupMessages[generateRandomNumber] : backupMessages[generateRandomNumber]);
	}
})();

const defaultCommand = () => {
	getCommitMessage();
};

const prefixCommand = () => {
	getCommitMessage(true);
};

module.exports = { defaultCommand, prefixCommand };