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
 
 var username = "FF12Bot";
 var oauth_pass = "oauth:fs0o6z0s680coy78e3rbh6753v0vaw";
 var channel = "ety04";
 
 
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