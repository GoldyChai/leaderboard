const schedule = require('node-schedule');
const {Messages} = require('./schema.js')
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed,WebhookClient} = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');
require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port);


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Somi Masturbating!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
const webhook =new WebhookClient({url : 'https://discord.com/api/webhooks/1048234158759088159/ix92qvvuXCsLlOd8gcMwQSUZdqYsxQqlojzhiDeLh5yj2l8TzZqf9VuB-PZFUUOT0xIY'})

const All = new Intents(7796)
const client = new Client({partials:['MESSAGE','CHANNEL','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS,Intents.FLAGS.MESSAGE_CONTENT,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_INTEGRATIONS] });
const webFunc = async ()=>{
let week = await Messages.find({}).sort({'messages': -1}).exec()
let day = await Messages.find({}).sort({'dailyMsg': -1}).exec()
let month = await Messages.find({}).sort({'monthlyMsg': -1}).exec()

let guild = await client.guilds.fetch('752105258481877073')
let members = await guild.members.fetch()
let rolesAll = await guild.roles.fetch()
let dailyRole = await rolesAll.find(obj => obj.name == 'RANK 1????????? ?????? DAILY ?????? ??????')
let monthlyRole = await rolesAll.find(obj => obj.name == 'RANK 1????????? ?????? MONTHLY ?????? ??????')
let weeklyRole = await rolesAll.find(obj => obj.name == 'RANK 1????????? ?????? WEEKLY ?????? ??????')
await dailyRole.delete()
await monthlyRole.delete()
await weeklyRole.delete()

let newDailyRole = await guild.roles.create({
    name: dailyRole.name,
    color: 0,
    hoist: true,
    mentionable: false,
    position: 106
})
let newMonthlyRole = await guild.roles.create({
    name: monthlyRole.name,
    color: 0,
    hoist: true,
    mentionable: false,
    position: 108
})
let newWeeklyRole = await guild.roles.create({
    name: weeklyRole.name,
    color: 0,
    hoist: true,
    mentionable: false,
    position: 107
})

await members.get(week[0].userid).roles.add(newWeeklyRole)
await members.get(day[0].userid).roles.add(newDailyRole)
await members.get(month[0].userid).roles.add(newMonthlyRole)
let monthname = 'December'
let weekname = 'Second Week of December'

let dailyembed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> Today's Rankings???`,
    description:`<a:crownkingblue:1048612972043456523>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[0].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[0].userid).user.username} 
<a:darkflame:1048613668809605200>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[1].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[1].userid).user.username} 
<a:fire_blue:1048614487831359588>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[2].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[2].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[3].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[3].userid).user.username}
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[4].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[4].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[5].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[5].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[6].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[6].userid).user.username}
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[7].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[7].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[8].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[8].userid).user.username} 
:snowflake:????????????????????<:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${day[9].dailyMsg}**???<a:boatblue2:1049959699853877288>${members.get(day[9].userid).user.username} `,
image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
},
timestamp: new Date().toISOString(),
footer: {
    text: `Updated on`
}
}






let monthlyembed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> ${monthname} Rankings???`,
    description:`<a:crownkingblue:1048612972043456523>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[0].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[0].userid).user.username} 
<a:darkflame:1048613668809605200>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[1].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[1].userid).user.username} 
<a:fire_blue:1048614487831359588>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[2].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[2].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[3].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[3].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[4].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[4].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[5].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[5].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[6].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[6].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[7].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[7].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[8].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[8].userid).user.username} 
:snowflake:????????????????????<:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${month[9].monthlyMsg}**???<a:boatblue2:1049959699853877288>${members.get(month[9].userid).user.username} `,
image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
},
timestamp: new Date().toISOString(),
footer: {
    text: `Updated on`
}
}//<:Message:1048617252724953109>

let embed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> ${weekname}???`,
    description: `<a:crownkingblue:1048612972043456523>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[0].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[0].userid).user.username} 
<a:darkflame:1048613668809605200>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[1].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[1].userid).user.username} 
<a:fire_blue:1048614487831359588>???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[2].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[2].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[3].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[3].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[4].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[4].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[5].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[5].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[6].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[6].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[7].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[7].userid).user.username} 
:snowflake:???????????? ???? <:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[8].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[8].userid).user.username}
:snowflake:????????????????????<:blue_arrow:1048615147108827286>???<:Message:1048617252724953109>???**${week[9].messages}**???<a:boatblue2:1049959699853877288>${members.get(week[9].userid).user.username}`,

image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
},
timestamp: new Date().toISOString(),
footer: {
    text: `Updated on`
}
}


 
await webhook.editMessage('1048619120620490814',{embeds:[dailyembed]})
await webhook.editMessage("1048619143349415937",{embeds:[monthlyembed]})
await webhook.editMessage("1048619133778022473",{embeds:[embed]})
}

// section for events schedules


 
// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('OH OH THE MISERYYYYYY');
   
    


});

const msgLd = schedule.scheduleJob('*/5 * * * *',async (firedTime) => {

    await webFunc()
    
});
msgLd
client.login(process.env.TOKEN);
