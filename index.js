#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const version = require('./package.json').version;

program
  .version(version)
  .option('-u, --url <url>', 'Slack webhook url', '')
  .option('-a, --alias', 'Username to use', 'default')
  .option('-t, --text', 'Notification text', '')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.url) console.log('  - peppers');
if (program.alias) console.log('  - pineapple');
if (program.text) console.log('  - bbq');
console.log('  - %s cheese', program.url);
