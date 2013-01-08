var sio = require("socket.io");

exports.Connection = function() {
    return {

        socket : null,

        open : function(host, port) {
            console.log("Openning connection to " + host + ":" + port);
        }
    }
};
