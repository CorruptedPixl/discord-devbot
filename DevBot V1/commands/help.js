// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    let commandName = args[0];                                                              //Gets the command name from the first argument
    let command;                                                                            //Defines the variable but doesn't assign anything yet

    if (args === undefined || args.length == 0) {                                           //Checks if the args array is empty, aka if the user just posted "!help" with no specific command as arg
        message.channel.send(`Yo, this should show all commands but *someone* hasn't finished coding that yet... Please use !help (command name) Current commands are ban, db, help, kick, ping, purge and report`);
        //TODO IF NO ARG, LIST ALL HELP COMMANDS
        return;
    } else if (fs.existsSync(`./${commandName}.js`)) {
        command = require(`./${commandName}.js`);                                           //Loads the command file because the "help description" data and image location is in that
    } else {                                                                                //If the command doesn't exist, send an error message
        message.channel.bulkDelete(1);
        message.channel.send(`Selected command doesn't exist.`)
            .then(msg => {
                msg.delete(msgDeleteDelay);
            });
        return
    }


    let helpimage = command.help.helpimage;                                                 //Gets the image path from the command file help secion

    try {

        if (!commandName) {
            message.channel.send(`No command selected, please use \`${prefix}help command\``);
        }

        if (fs.existsSync(helpimage)) {                                                     //Tests if the help image exists
            message.channel.send(command.help.description, {
                files: [`${command.help.helpimage}`]
            });
        } else {                                                                            //If the help image doesn't exist, it just sends the description and an error message
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
    helpimage: "./commands/assets/help-help.png"
}