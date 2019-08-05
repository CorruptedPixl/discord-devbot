const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let messageDeleteAmount = parseInt(args[0]);                                            //Sets a variable of amt of msg to delete to use later. Also converts the string from args[0] to a number to be able to add 1 to delete the "!purge" message itself too
    messageDeleteAmount = messageDeleteAmount + 1;

    if (messageDeleteAmount <= 0){
        message.channel.send(`You're an absolute dipshit, ${message.member}. You can't purge a negative amount of messages!`)
            .then(msg => {
                msg.delete(5000);
            })
    }


    else {
        message.channel.bulkDelete(messageDeleteAmount);                                        //This actually deletes the messages
}}

module.exports.help = {
    name: "purge"
}