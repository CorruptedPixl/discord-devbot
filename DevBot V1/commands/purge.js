const Discord = require("discord.js");
const {msgDeleteDelay} = require('../config.json');

module.exports.run = async (client, message, args) => {

    let messageDeleteAmount = args[0];                                                              //We store the args in a variable to use later
    messageDeleteAmount = parseInt(args[0]);                                                        //Sets a variable of amt of msg to delete to use later. Also converts the string from args[0] to a number to be able to add 1 to delete the "!purge" message itself too
    messageDeleteAmount = messageDeleteAmount + 1;

    if (messageDeleteAmount <= 0){                                                              //Handles an error if the user enters a negative value or 0
        console.log(typeof(messageDeleteAmount))
        console.log(messageDeleteAmount)
        console.log("1")
        message.channel.send(`You're an absolute dipshit, ${message.member}. You can't purge a negative amount of messages!`)
            .then(msg => {
                msg.delete(msgDeleteDelay);
            });
    }
    
    else if (messageDeleteAmount >= 100){                                                           //Handles an error if the user tries to delete more than 100 messages
        console.log(typeof(messageDeleteAmount))
        console.log(messageDeleteAmount)
        console.log("2")
        message.channel.bulkDelete(100);
        message.channel.send(`You can only delete 100 messages at a time ${message.member}.`)
            .then(msg => {
                msg.delete(msgDeleteDelay);
            });
    }
    
    else if (messageDeleteAmount <= 100 && messageDeleteAmount >= 0){
        console.log(typeof(messageDeleteAmount))
        console.log(messageDeleteAmount)
        console.log("3")
        message.channel.bulkDelete(messageDeleteAmount);                                        //This actually deletes the messages
    }
    
    else{                                                                                         //We check if the datatype of the arg is indeed a number, if not, return an error
    console.log(typeof(messageDeleteAmount))
    console.log(messageDeleteAmount)
    console.log("4")
    message.channel.send(`How about you try and enter a number this time around? ${message.member}`)
        .then(msg => {
            msg.delete(msgDeleteDelay)
        });
}}

module.exports.help = {
    name: "purge"
}