#!/usr/bin/env node

const program = require('commander');
const version = require('./package.json').version;
const CHANNEL = '@helsont';

program
  .version(version)
  .option('-u, --url <url>', 'Slack webhook url')
  .option('-t, --text <text>', 'Notification text')
  .parse(process.argv);

if (!program.url) {
  return console.log('Must specify a url arg');
}

if (!program.text) {
  return console.log('Must specify a text arg');
}

const Slack = require('./lib/slack');
const slack = new Slack(program.url);

slack
  .notify(program.channel, program.text)
  .then(console.log)
  .catch(console.error);
