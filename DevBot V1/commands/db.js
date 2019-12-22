const Discord = require("discord.js");
const { msgDeleteDelay, prefix } = require('../config.json');
const { shippingArray, howtoArray } = require('../commands/command-config/sitemap-arrays.json');

module.exports.run = async (client, message, args) => {

    let destination;                                                                                            //Defines global variables
    let link = "https://dbrand.com/";                                                                           //Sets standard link to add to later


    if (args.length == 0) {                                                                                     //Deletes user message and sends an error if they don't give any args
        message.channel.bulkDelete(1);
        message.channel.send(`No argument. Please use !db *argument*`)
    }


    else if (args.length > 0) {

        //!Below are the supported functions that handle certain db args
        const caseGrip = () => {                        //Set link to grip
            link = link + "shop/grip/#grip-devices";
            message.channel.bulkDelete(1);
        }

        const caseSupport = () => {                     //Set link to support
            link = link + "contact";
            message.channel.bulkDelete(1);
        }

        const caseSkin = () => {                        //Set link to skins
            link = link + "shop/skins";
            message.channel.bulkDelete(1);
        }

        const casePrism = () => {                       //Set link to Prism
            link = link + "shop/prism";
            message.channel.bulkDelete(1);
        }


        //!This checks the first argument. Handles it if found, if not, it just stops
        switch (args[0]) {
            //Grip
            case "grip": caseGrip(); break;
            case "g": caseGrip(); break;
            //Support
            case "support": caseSupport(); break;
            case "help": caseSupport(); break;
            case "contant": caseSupport(); break;
            case "h": caseSupport(); break;
            case "c": caseSupport(); break;
            //Skins
            case "skins": caseSkin(); break;
            case "skin": caseSkin(); break;
            case "s": caseSkin(); break;
            //Prism
            case "prism": casePrism(); break;
            case "p": casePrism(); break;

            default:
                break;
        }


        if (args[0] == "shipping" || args[0] == "ship") {                                                       //Checks for "shipping" as first arg, then searches the shipping array for any matches to the second arg and returns the first link found
            let matches;
            message.channel.bulkDelete(1);                                                                      //Deletes user's message

            if (args[1] != undefined) {                                                                         //Checks for an argument

                let isTextOnly = /^[A-Z]+$/i.test(args[1]);                                                     //Tests via a regex if the argument is only characters, not emoji's or slashes or numbers
                if (!isTextOnly) {
                    message.channel.send("Country codes and emoji's are not supported. Please type part of the country's name to search.")
                        .then(msg => {
                            msg.delete(msgDeleteDelay);
                        });
                }

                matches = shippingArray.filter(s => s.includes(args[1].toString().toLowerCase()));              //Creates an array with all country's found that match part of the substring (arg1)
                console.log(args[1].toString());

                console.log(matches);                                                                           //Used for debugging

                if (matches.length > 0) {
                    link = `https://dbrand.com/shipping/${matches[0]}`;
                    destination = matches[0];

                    let shippingEmbed = new Discord.RichEmbed()
                        .setTitle(`Shipping to ${destination}`)
                        .setDescription(`Click the link above to see shipping time to ${destination}. \nYou can also [view all shipping destinations here](https://dbrand.com/shipping)`)
                        .setURL(`${link}`)
                        .setColor('#ffbb00')
                        .setTimestamp()
                        .attachFiles(['../DevBot V1/commands/assets/db-logo.png'])
                        .setFooter('dbrand.com', 'attachment://db-logo.png')

                    message.channel.send(shippingEmbed);
                } else if (isTextOnly) {
                    link = link + "shipping";

                    let shippingEmbedNotFound = new Discord.RichEmbed()
                        .setTitle(`Check shipping times here!`)
                        .setDescription(`Country not found.\nYou can [view all shipping destinations here](https://dbrand.com/shipping)`)
                        .setURL(`${link}`)
                        .setColor('#ffbb00')
                        .setTimestamp()
                        .attachFiles(['../DevBot V1/commands/assets/db-logo.png'])
                        .setFooter('dbrand.com', 'attachment://db-logo.png')
                    message.channel.send(shippingEmbedNotFound);
                }
            }
        }

        let dbEmbedLink = new Discord.RichEmbed()

            .setTitle(link)
            .setURL(link)
            .setDescription(link)
            .setThumbnail('attachment://db-logo.png')
            .addField('Regular field title', 'Some value here')
            .addBlankField()
            .setColor('#ffbb00')
            .addField('Inline field title', 'Some value here', true)
            .addField('Inline field title', 'Some value here', true)
            .attachFiles(['../DevBot V1/commands/assets/db-logo.png'])
            .setImage('attachment://db-logo.png')
            .setTimestamp()
            .setFooter('dbrand.com', 'attachment://db-logo.png')


        if (args[0] != "shipping" && args[0] != "ship") {
            message.channel.send(dbEmbedLink);
        }

    }

    else {
        message.channel.bulkDelete(1);
        message.channel.send(`Invalid command, please try again ${message.member} \nCurrent commands are !db grip, support, shipping, skins and prism.`)
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