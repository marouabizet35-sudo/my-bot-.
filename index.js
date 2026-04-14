import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});

client.once('ready', () => {
  console.log('✅ تم تشغيل بوت Ginger Bakery بنجاح!');
});

client.login(process.env.TOKEN);
