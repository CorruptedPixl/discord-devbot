const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    message.reply("You're verified!");
}

module.exports.help = {
    name: "verify",
    description: `${prefix}verify verifies the person`,
    helpimage: "./commands/assets/verify_help.png"
}