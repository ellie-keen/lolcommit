#! /usr/bin/env node
const get = require('simple-get')
 
get('http://whatthecommit.com/index.txt', function (err, res) {
  if (err) throw err
  res.pipe(process.stdout)
})