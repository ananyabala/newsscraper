// Requiring path
var path = require("path");
// Building out routes to display the view-layer to the routes specified 
module.exports = function (app) {

    // For the home route :: localhost:+port
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });
}




