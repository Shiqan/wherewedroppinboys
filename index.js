const  Discord = require("discord.js");
const  randomItem = require('random-item');

const  client = new Discord.Client();
const  token = process.env.CLIENT || '';

var locations = [
  "Junk Junction",
  "Haunted Hills",
  "Mini Motel",
  "Anarchy Acres",
  "Pleasant Park",
  "Tomato Town",
  "Wailing Woods",
  "Creative Containers",
  "Loot Lake",
  "Lonely Lodge",
  "Snobby Shores",
  "Tilted Towers",
  "Dusty Depot",
  "Retail Row",
  "Greasy Grove",
  "Shifty Shafts",
  "Salty Springs",
  "Flush Factory",
  "Fake Flush",
  "Fatal Fields",
  "Peaceful Prison",
  "Moisty Mire"];

client.on("ready", function () {
	console.log("Ready to begin!");
});

client.on('message', msg => {
  if (msg.content === '!drop') {
    msg.reply(randomItem(locations))
      .then(sent => console.log(`Sent a reply to ${msg.author.username}`))
      .catch(console.error);
  }
});

client.login(token).catch(error => {
  console.log(error);
});
