#! /usr/bin/env node
const get = require('simple-get')

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
  'add code'
];

const generateRandomNumber = Math.floor(Math.random() * offlineCommitMessages.length - 1);
 
get('http://whatthecommit.com/index.txt', function (err, res) {
  if (err) {
    console.log(offlineCommitMessages[generateRandomNumber]);
  }
  res.pipe(process.stdout)
});