var should = require("should");
var commands = require("../src/commands");

describe("Commands Factory", function() {
    describe("#build()", function() {
        it("should fail in case connect command was executed with no args", function() {
            commands.build("connect", null);
        });
    })
});
