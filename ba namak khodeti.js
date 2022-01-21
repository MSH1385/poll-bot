const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '$poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('Poll!')
        .setDescription(pollDescription)
        .setColor('#fed318')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('✅')
        await msgEmbed.react('⛔')
    }

})



bot.login('OTMxOTI3NzQ0NDgzMzIzOTA0.YeLjWA.0WcXhwXBMb9FEA2rZ17V6g-T06s');