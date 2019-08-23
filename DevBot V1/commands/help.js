// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    let commandName = args[0];      //Gets the command name from the first argument
    let command = require(`./${commandName}.js`);       //Loads the command file because the "help description" data and image location is in that
    let helpimage = command.help.helpimage;      //Gets the image path from the command file help secion

    try {
        if (fs.existsSync(helpimage)) {     //Tests if the help image exists
            message.channel.send(command.help.description, { files: [`${command.help.helpimage}`] });
        }
        else {      //If the help 
            message.channel.send(command.help.description);
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
        description: `${prefix}help lists all available commands. Do ${prefix}help [command name] to get specific info about a command.`,
        helpimage: "./commands/assets/help_help.png"
    }