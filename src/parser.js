exports.parseCommand = function(line) {
    if (line) {
        var tokens = line.trim().split(" ");
        return tokens[0];
    }
    return null;
};

exports.parseArgs = function(line) {
    if (line) {
        var tokens = line.trim().split(" ");
        if (tokens.length > 1) {
            return tokens.slice(1);
        } else {
            return null;
        }
    }
    return null;
};