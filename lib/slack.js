const SlackNode = require('slack-node');

class Slack {
  constructor(webhookURL) {
    this.webhookURL = webhookURL;
    this.slack = new SlackNode();
    this.slack.setWebhook(webhookURL);
  }
  notify(channel, text) {
    return new Promise((success, error) => {
      this.slack.webhook({
        channel,
        text
      }, function(err, response) {
        if (err) {
          return error(err);
        }
        return success(response);
      });
    });
  }
}

module.exports = Slack;
