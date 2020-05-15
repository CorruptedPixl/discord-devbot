const Discord = require("discord.js");
const { msgDeleteDelay } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {message.reply('nah bro you\'re not worthy of the hammer')}


    var user

    if (message.mentions.users.first()) {
        user = message.mentions.users.first()
    }
    else {
        return message.channel.send('that user doesn\'t exist')
    }
    if (!message.guild.member(user).bannable) { return message.reply('I can\'t ban this user lmao') } 
    message.guild.member(user).kick()
    message.channel.send(`✅ ${user.tag} has been successfully kicked lmao`)
}

module.exports.help = {
    name: "kick"
}