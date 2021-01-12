// https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot
// check README.md for instructions
console.log('Beep beep! 🤖');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('your token');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Ready ❤️');
}

const replies = [
    '🚂🌈❤️',
    'Hello',
    'Hi',
    'Choo Choo',
    'Ding! 🔔'
]

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel.id == 'your channel id' && msg.content === 'Hi' || msg.channel.id == 'your channel id' && msg.content === 'Hello') {
        // msg.reply('Hello')
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}
