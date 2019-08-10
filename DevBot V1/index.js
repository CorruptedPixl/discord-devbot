const Discord = require('discord.js');
const {prefix,token} = require('./config.json');
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();


// fs.readdir("./commands/", (err, files) => {
	
// 	if (err) console.log(err);

// 	let jsfile = files.filter(f => f.split(".") .pop = "js");

// 	if (jsfile.length <= 0) {
// 		console.log("Couldn't find commands.");
// 		return;
// 	}

// 	jsfile.forEach((file,amount) => {
// 		let properties = require(`./commands/${file}`);
// 		console.log(`${file} loaded!`);
// 		client.commands.set(properties.help.name, properties);
// 	});
// });

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	let command = require(`./commands/${file}`);
	console.log(`${file} loaded!`);
	client.commands.set(command.help.name, command);
}

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

	if (!message.content.startsWith(prefix) || message.author.bot) return; 					//Ignores messages that don't start with the prefix or messages that the bot itself sends
	if (message.channel.type === "dm") return;												//Ignores dm's

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();

	
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply("There was an error trying to execute that command! Please let pixl know of this error");
	}
	
	
	// let messageArray = message.content.split(" ");
	// let cmd = messageArray[0];
	// let args = messageArray.slice(1);
  
	// let commandfile = client.commands.get(cmd.slice(prefix.length));
	// if(commandfile) commandfile.run(client,message,args);

});


client.login(token);