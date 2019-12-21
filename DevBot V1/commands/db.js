const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    // let dbEmbed = new Discord.RichEmbed()
    //     .setDescription("***dbrand***")
    //     .setColor("#ffbb00")
    //     .addField("dbrand bot", "***dbrand bot***")
    //     .addField("Message sent in", message.channel)
    //     .addField("Time", message.createdAt)
    //message.channel.send(dbEmbed)


    let link = "https://dbrand.com/";
    let arrayLength = args.length;



    console.log(arrayLength);

    if (arrayLength == 0) {
        message.channel.bulkDelete(1);
        message.channel.send(`\`Usage: ${prefix}db [arg1] [arg2] [arg3] etc... Min 1 argument expected.\``)
    }

    else if (arrayLength == 1) {

        if (args[0] == "grip" || args[0] == "g") {                                                                               //Set link to grip
            link = link + "shop/grip/#grip-devices";
            message.channel.bulkDelete(1);
            console.log(link);
        }

        if (args[0] == "help" || args[0] == "contact" || args[0] == "support" || args[0] == "h" || args[0] == "c") {             //Set link to support
            link = link + "contact";
            message.channel.bulkDelete(1);
        }

        if (args[0] == "skins" || args[0] == "s") {                                                                              //Set link to skins
            link = link + "shop/skins";
            message.channel.bulkDelete(1);
        }

        if (args[0] == "prism" || args[0] == "p") {                                                                              //Set link to prism
            link = link + "shop/prism";
            message.channel.bulkDelete(1);
        }

        let dbEmbedLink = new Discord.RichEmbed()
            .setColor('#ffbb00')
            .setTitle(link)
            .setURL(link)
            .setDescription(link)
            .setThumbnail('attachment://50FPS.gif')
            .addField('Regular field title', 'Some value here')
            .addBlankField()
            .addField('Inline field title', 'Some value here', true)
            .addField('Inline field title', 'Some value here', true)
            .attachFiles(['../DevBot V1/commands/assets/50FPS.gif'])
            .setImage('attachment://50FPS.gif')
            .setTimestamp()
            .setFooter('Some footer text here', 'attachment://./assets/50FPS.gif')


        message.channel.send(dbEmbedLink);
    }

    else {
        message.channel.bulkDelete(1);
        message.channel.send(`Invalid command, please try again ${message.member}`)
            .then(msg => {
                msg.delete(msgDeleteDelay)
            });
    }

}





module.exports.help = {
    name: "db",
    description: `Use \`${prefix}db x y\` to post a link in chat to a specific product. For example \`${prefix}db grip op7p\``,
    helpimage: "./commands/assets/db_help.png"
}