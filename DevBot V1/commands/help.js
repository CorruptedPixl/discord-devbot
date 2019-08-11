// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    let commandName = args[0];
    let command = require(`./${commandName}.js`);
    let helpimage = command.help.helpimage

    try {
        if (fs.existsSync(helpimage)) {
            message.channel.send(command.help.description, { files: [`${command.help.helpimage}`] });
        }
        else {
            message.channel.send("Help image doesn't exist, dm Pixl asap!")
                .then(msg => {
                    msg.delete(msgDeleteDelay);
                });
        }

    } catch (error) {
            console.error(error);
            message.channel.send("There was an error trying to execute that command! Please let pixl know of this error");
        }
    }

module.exports.help = {
        name: "help",
        description: `${prefix}help lists all available commands.`
    }