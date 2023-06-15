const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({ 
    intents: [Guilds, GuildMembers, GuildMessages], 
    partials: [User, Message, GuildMember, ThreadMember]
});

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);



client.login(client.config.token);
    // .then(() => {
    //     console.log(`client logged in as ${client.user.username}`);
    //     client.user.setActivity(`with ${client.guilds.cache.size} guild(s)`);
    // })
    // .catch((err) => console.log(err));