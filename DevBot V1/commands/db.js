const Discord = require("discord.js");
const {msgDeleteDelay, prefix} = require('../config.json');

module.exports.run = async (client, message, args) => {
    // let dbEmbed = new Discord.RichEmbed()
    //     .setDescription("***dbrand***")
    //     .setColor("#ffbb00")
    //     .addField("dbrand bot", "***dbrand bot***")
    //     .addField("Message sent in", message.channel)
    //     .addField("Time", message.createdAt)
    //message.channel.send(dbEmbed)

    let dbEmbed = new Discord.RichEmbed()
	.setColor('#ffbb00')
	.setTitle('dbrand.com')
	.setURL(link)
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('attachment://../assets/1_50FPS.gif')
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');




    let link = "https://dbrand.com/";
    let arrayLength = args.length;

    console.log(arrayLength);

    if (arrayLength == 0){
        message.channel.send(dbEmbedLink)
    }


    if (args[0] == "grip"){
        link = link + "shop/grip/";
    }
}





module.exports.help = {
    name: "db",
    description: `Use \`${prefix}db x y\` to post a link in chat to a specific product. For example \`${prefix}db grip op7p\``
}