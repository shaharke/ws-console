var vows = require('vows');
var should = require('should');

var parser = require('../src/parser');

vows.describe("Parser").addBatch({
   '#parseCommand()' : {
       topic : function() {
           return parser.parseCommand("connect http://localhost:3000")
       },

       "should parse the 'connect' command" : function(topic) {
            topic.should.eql("connect");
       }

   },

   '#parseArgs()' : {
       topic : function() {
           return parser.parseArgs("connect localhost 3000");
       },

       "should parse the arguments of the 'connect' command" : function(topic) {
           topic.should.eql(["localhost", "3001"]);
       }
   }
}).export(module);
