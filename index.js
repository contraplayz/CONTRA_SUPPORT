const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgzMjYwMjYxMDcwNzk4ODc4.Xlo90Q.JSO3f-4KAvANLbKfQNfitWiy4pc';

const PREFIX = '';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;
        case 'youtube':
            message.reply('https://bit.ly/38GnJNm');
            break;
        case 'YOUTUBE':
                message.reply('https://bit.ly/38GnJNm');
                break;
        case 'send me youtube link':
            message.reply('https://bit.ly/38GnJNm');
            break;
        case 'email':
            message.reply('contraplayz07@gmail.com');
            break;
        case 'EMAIL':
            message.reply('contraplayz07@gmail.com');
            break;
        case 'discord':
            message.reply('https://discord.gg/vuGDp4K');
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error Please define amount')
            message.channel.bulkDelete(args[1]);
            break;
    }
})

bot.login(token);