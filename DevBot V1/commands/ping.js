const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    console.log("Ping command works!");
    message.channel.send('Pong!');
    message.channel.send(`The current ping is ${client.ping} ms`);

}

module.exports.help = {
    name: "ping"
}