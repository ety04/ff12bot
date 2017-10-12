/* ---------------------------- *
* FF12Bot v1.0.0
* ~~~~~~~~~~~
* D E S C R I P T I O N
* ~~~~~~~~~~~
* FF12Bot is free to use, modify and redistribute.
* Creator: Ety
* License: LGPL-3.0
* Language: Javascript with Node.js
* Additional libraries: Twitch-bot
* Initial use: Ety's twitch channel: https://www.twitch.tv/ety04
 * ---------------------------- */

const TwitchBot = require('twitch-bot')
 
 var b_username = "FF12Bot";
 var b_oauth_pass = "oauth:fs0o6z0s680coy78e3rbh6753v0vaw";
 var b_channel = "ety04";
 
 /*
const Bot = new TwitchBot(username, oauth_pass, channel)
 
Bot.on('join', () => {
 
  Bot.on('message', chatter => {
    if(chatter.message === '!test') {
      Bot.say('Command executed! PogChamp')
    }
  })
})
 
Bot.on('error', err => {
  console.log(err)
})
*/

var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: b_username,
        password: b_oauth_pass
    },
    channels: ["#" + b_channel"]
};

var bot = new tmi.client(options);

// Connect the client to the server..
bot.connect();