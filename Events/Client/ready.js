const { loadCommands } = require("../../Handlers/commandHandler");
 
// event: display message once client is running
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("The Client is now ready.");

        loadCommands(client);
    }
}