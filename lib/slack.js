/* @flow */
const Slack = require('slack-node');

module.exports = function(webhookUri) {

  var slack = this.slack = new Slack();
  slack.setWebhook(webhookUri);

  this.notify = function(channel, username, text) {
    return new Promise(function(success, error) {
      slack.webhook({
        channel: channel,
        username: username,
        text: text
      }, function(err, response) {
        if (err) {
          return error(err);
        }
        return success(response);
      });
    });
  };
};
