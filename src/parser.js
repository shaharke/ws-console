exports.parseCommand = function(line) {
    if (line) {
        var tokens = line.trim().split(" ");
        return tokens[0];
    }
    return null;
};