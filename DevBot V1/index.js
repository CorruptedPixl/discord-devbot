const Discord = require('discord.js');
const {prefix,token} = require('./config.json');
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	
	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".") .pop = "js");

	if (jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((file,amount) => {
		let props = require(`./commands/${file}`);
		console.log(`${file} loaded!`)
		client.commands.set()
	});
});

client.once('ready', () => {
	console.log('This bitch ready!');														//sends a message when the bot is ready

	if (client.guilds.size === 1){															//prints the amount of servers it's connected to. Should never be more than 1
		console.log(`The bot is online in ${client.guilds.size} server!`);
	}
	else{
	console.log(`The bot is online in ${client.guilds.size} servers!`);
	}

	client.user.setStatus("idle");
	client.user.setActivity('over you dipshits', { type: 'WATCHING' });
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return; 					//ignores messages that don't start with the prefix or messages that the bot itself sends
	if (message.channel.type === "dm") return;												//ignores dm's

	const args = message.content.slice(prefix.length).split(' ');							//This splits the args and puts them in an array
	const command = args.shift().toLowerCase();
	
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong, bitch');
		message.channel.send(`The current ping is ${client.ping} ms`);
	}
	
	if (message.content.startsWith(`${prefix}db`)) {
		message.channel.send('dbrand bot, dbrand BOT!');

		let dbEmbed = new Discord.RichEmbed()
			.setDescription("***dbrand***")
			.setColor("#ffbb00")
			.addField("dbrand bot", "***dbrand bot***")
			.addField("Message sent in", message.channel)
			.addField("Time", message.createdAt)
	message.channel.send(dbEmbed)
	}

	
});


client.login(token);