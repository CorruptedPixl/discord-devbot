const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let dbEmbed = new Discord.RichEmbed()
        .setDescription("***dbrand***")
        .setColor("#ffbb00")
        .addField("dbrand bot", "***dbrand bot***")
        .addField("Message sent in", message.channel)
        .addField("Time", message.createdAt)
    message.channel.send(dbEmbed)
}

module.exports.help = {
    name: "db"
}