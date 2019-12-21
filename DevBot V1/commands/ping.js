const Discord = require("discord.js");
const { msgDeleteDelay } = require('../config.json');

module.exports.run = async (client, message, args) => {
    console.log("Ping command works!");
    message.channel.send(`Pong! \nThe current ping is ${client.ping} ms`)

}

module.exports.help = {
    name: "ping"
}