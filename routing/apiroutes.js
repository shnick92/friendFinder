var friends = require("../data/da");

module.exports = function(app)  {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;

        var match = {
            user: "",
            diff: 1000
        }

        var newScore = 0;
        for (var k = 0; k < newUser.scores.length; k++) {
            newScore += parseFloat(JSON.parse(newUser.scores[k]));
        };

        for (var i = 0; i < friends.length; i++) {
            var score = 0;
            for (var p = 0; p < friends[i].scores.length; p++) {
                score += friends[i].scores[p];
            }
            var difference = Math.abs(newScore - score);
            if (score <= match.diff) {
                match.user = friends[i];
                match.diff = difference;
            }
        }

        friends.push(newUser);

        res.json(match);
    });
};