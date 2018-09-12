// var scrapeFunction = require("./data/scrape")

// STEP 1: Get the scraping to work and scrape 1) the headline, 2) summary and 3) url

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
var request = require("request");
// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
//app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("views"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Database Server
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, console.log("connected"));

// Server the application is running on
var port = process.env.PORT||PORT;
app.listen(port);
console.log('Server started! At http://localhost:'+port);



