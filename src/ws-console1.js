var readline = require('readline');
var parser = require("./parser");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("> ");


rl.on('line', function (cmd) {
    var command = parser.parseCommand(cmd);
    var args = parser.parseArgs(cmd);
    console.log("Executing: " + command + " " + args.join(" "));
    rl.prompt();
});

rl.prompt();
