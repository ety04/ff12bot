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
 
 var b_username = "FF12Bot";
 var b_oauth_pass = "oauth:fs0o6z0s680coy78e3rbh6753v0vaw";
 var b_channel = "ety04";
 
 var b_num_cnt = 1;
 var b_num_dmg = 1;
 
 /*
const TwitchBot = require('twitch-bot')

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

const tmi = require("tmi.js");

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
    channels: ["#" + b_channel]
};

var bot = new tmi.client(options);

/** Recursively computing Numerology damage */
function numChance(b_cnt)
{
	if(b_cnt == 1)
		return 0.85;
	else
		return numChance(b_cnt - 1) - (b_cnt/2);
}

/** Command parsing */
bot.on("message", function(channel, userstate, message, self, username) {

	if(username !== bot.username)
	{
		// If first character is not "!", don't bother
		  if(self || message[0] !== "!") {
			  console.log("Command not beginning with '!'")
			  return;
		  }
		  
		  // Isolate what follows the "!" without spaces
		  let word = message.slice(1).split(" ");
		  let commandName = word.shift();
		  let commandLower = commandName.toLowerCase();

		  if(commandName === "Kappa") {
			console.log("Kappa found!");
			bot.say(channel, "Keepo");
		  }
		  
		  if(commandLower.substr(0,4) == "num")
		  {
			var newProbs = Math.random(); console.log("new prob: " + newProbs);
			var currentBar = numChance(b_num_cnt); console.log("new bar: " + currentBar);
		   if(b_num_cnt > 16 || newProbs > currentBar)
		   {
				b_num_dmg = 1;
				b_num_cnt = 1;
				bot.say(channel, "It's a total failure! " + username + " broke the Numerology ! Back to the start... Kappa");
				return;
			}
			b_num_dmg *= 2;
			bot.say(channel, "Numerology damage is: " + b_num_dmg + " !\n (Attempt number " + b_num_cnt + ")");
			b_num_cnt ++;
		 }
	} // END user is not ff12bot
  
}); // END function

console.log("Before connection");

// Connect the client to the server.
bot.connect();

console.log("After connection!");
