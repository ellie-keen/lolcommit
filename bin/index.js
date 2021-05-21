#! /usr/bin/env node
const got = require('got')

const { backupMessages } = require("./backupMessages");

const generateRandomNumber = Math.floor(Math.random() * (backupMessages.length - 1));

(async () => {
	try {
		const response = await got('http://whatthecommit.com/index.txt');
		console.log(response.body);
	} catch (error) {
		console.log(backupMessages[generateRandomNumber]);
	}
})();