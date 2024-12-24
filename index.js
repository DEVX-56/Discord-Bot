const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}); // It's virtual client using this we can interact with server  This clent have access to create guild and also create  and update messages

// when a message will created this callback function will be called
client.on("messageCreate", (message) => {
  /*console.log(message.content);  // This is the message send by user
  console.log(message);  // when we print the whole message, This will return the full message obj....Where we can sow the username , message time etc.*/
  if (message.author.bot) return;  // for this condition bot will not send reply on his own message.
  if (message.content.startsWith('create')){
    const url = message.content.split('create')[1];
    return message.reply({
        content: "Generateing Short ID for"+ url,
    });
  };
  message.reply({  //This will be reply from the bot when a user send message.
    content: "Hi from Bot",
  });
});


//This function will interact when user will send (ping) command
client.on('interactionCreate', interaction =>{ 
    console.log(interaction);
    interaction.reply('No ping🤬 Please');
});


client.login(
  "/******** Discord bot token***********/"
);

