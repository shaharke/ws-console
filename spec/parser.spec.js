var should = require("should");
var parser = require("../src/parser");

describe('Parser', function(){
    describe('#parseCommand()', function(){
        it("should parse the 'connect' command", function(){
            var command = parser.parseCommand("connect http://localhost:3000");
            command.should.eql("connect");
        })
    })

    describe('#parseArgs()', function() {
        it("should parse the command's arguments", function() {
            var args = parser.parseArgs("connect localhost 3000");
            args.should.have.lengthOf(2);
            args.should.eql(["localhost", "3000"]);
        });
    })
})
