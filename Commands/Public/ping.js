const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");

// command: pings bot to check response
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Will respond with pong."),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({
            content: "reloaded",
            ephemeral: true
        })
    }
}