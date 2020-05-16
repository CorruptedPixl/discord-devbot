/* eslint-disable no-unused-vars */
const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {message.reply('nah bro you\'re not worthy of the hammer')}


    var user

    if (message.mentions.users.first()) {
        user = message.mentions.users.first()
    }
    else {
        return message.channel.send('that user doesn\'t exist')
    }
    if (!message.guild.member(user).bannable) { return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!') } 
   

let reason = args.slice(1).join(' ');
    if(!reason) {
      reason = "No reason given";
    }
    else {
      reason = `${reason}`
    }

await member.send(`You have been banned from dbrand for ${reason})
  .catch(err => message.channel.send(`There has been an error notifying the user.`));

 message.guild.ban(user)
    message.channel.send(`✅ ${user.tag} has been successfully banned for ${reason}!`)

}

module.exports.help = {
    name: "ban",
    description: `Usage: ${prefix}ban id reason`,
    helpimage: "./commands/assets/ban_help.png"
}
