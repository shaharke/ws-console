var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("> ");
rl.prompt();

rl.on('line', function (cmd) {
    if (cmd) {
        cmd = cmd.trim();
        var tokens = cmd.split(" ");
        var command = tokens[0];

        if (command.indexOf('connect') == 0) {
            if (tokens.length > 1) {
                var address = tokens[1];
                console.log('Connecting to ' + address);
            } else {
                console.error("Missing address!");
                rl.prompt();
            }
        } else {
            console.error("Invalid command: " + command);
            rl.prompt();
        }
    }


});
