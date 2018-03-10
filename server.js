var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});