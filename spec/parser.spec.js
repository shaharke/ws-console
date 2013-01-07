var should = require("should");
var parser = require("../src/parser");

describe('Parser', function(){
    describe('#parseCommand()', function(){
        it("should parse the 'connect' command", function(){
            should.equal(parser.parseCommand("connect http://localhost:3000"),
                         "connect");
        })
    })

    describe('#parseArgs()', function() {
        it("should parse the command's arguments", function() {

        });
    })
})
