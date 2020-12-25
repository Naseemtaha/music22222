onst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




var stringToCheck = content;
stringToCheck.replace(/\s+/g, '').toLowerCase();

const noNoWords = ["ex", "ex"];

client.on("message", message => {
    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            break
        }
    }
}







client.login(process.env.BOT_TOKEN);
