var express = require('express')
var Discord = require("discord.js");
var randomItem = require('random-item');

var app = express()
var client = new Discord.Client();

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
	console.log("Ready to begin! Serving in " + client.channels.length + " channels");
});

client.on("message", function(message) {
    if (message.content === "!drop") {
      client.reply(randomItem(locations));
    }
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
