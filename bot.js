// https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot
console.log('Beep beep! 🤖');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk3MzgxNDUwNTI1NzA0MjAz.X_lpWA.CrtZYtj9hi2wNSEH3LwtG2d9OoE');

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
    if (msg.channel.id == '797385334726983690' && msg.content === 'Hi' || msg.channel.id == '797385334726983690' && msg.content === 'Hello') {
        // msg.reply('Hello')
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}