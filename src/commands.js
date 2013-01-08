exports.build = function(command, args) {
    if (command == "connect") {
        var commandObj = ConnectCommand(args);
    }
}

function ConnectCommand(args) {
    return {

        validate : function(args) {
            if (!args || args.length < 2) {
                throw Error("Invalid arguments")
            } else {
                this.host = args[0];
                this.port = args[1];
            }
        }(args),

        host : null,

        port : null
    }
}
