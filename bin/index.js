#! /usr/bin/env node
const got = require('got')

const offlineCommitMessages = [
  'another commit',
  'qwerty',
  'last one was committed by accident',
  'ignore last commit',
  'oh lord, that was a mistake',
  'bug fix number 260',
  'ship it',
  'more changes',
  'more stuff to fix the previous things',
  'the product owner made me do it',
  'add code',
  'aodjpsodDAHHHHH!',
  'made it DRY, made it DRY'
];

const generateRandomNumber = Math.floor(Math.random() * offlineCommitMessages.length - 1);

(async () => {
	try {
		const response = await got('http://whatthecommit.com/index.txt');
		console.log(response.body);
	} catch (error) {
		console.log(offlineCommitMessages[generateRandomNumber]);
	}
})();