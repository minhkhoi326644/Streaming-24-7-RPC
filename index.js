const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();
TOKEN = 'ODg1MTI2NDg1NjYzNDQ5MTM5.GnIgbq.a1M5xtf0q58kxO5hmcgyqc47pqHAE8MGcKZkpM'
function formatTime() { // Hj
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Kết nối thành công đến Account`);

  const r = new Discord.RichPresence()
    .setApplicationId('1150928778965565500')
    .setType('STREAMING')
    .setURL('https://twitch.tv/clouds1510') //Must be a youtube video link 
    .setState('A n h Y ê u E m')
    .setName('Nhớ Em')
    .setDetails(`Zao`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1146254389946892330/1157328813752070304/8881426.gif?ex=654e4373&is=653bce73&hm=26d0e06e03248e5c71c050a6&=&width=1165&height=655') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsLargeText('24/7 Nghĩ Đến Em') //Văn bản khi bạn di chuột vào Hình ảnh lớn
    //.setAssetsSmallImage('https://media.discordapp.net/attachments/1146254389946892330/1151014027762344006/IMG_20230912_054736.jpg?width=580&height=580') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsSmallText('Meow Meow') //Văn bản khi bạn di chuột vào Hình ảnh nhỏ
    .addButton('Avocado School', 'https://discord.gg/aavocadoschool')
    .addButton('My Facebook', 'https://www.facebook.com/minnkhoi.1510/');
   

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Zao`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);