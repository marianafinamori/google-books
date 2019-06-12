const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const axios = require("axios");
// const cheerio = require("cheerio");
const mongojs = require("mongojs")
const bodyParser = require("body-parser");
var router = express.Router();
var path = require("path");
const db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use morgan logger for logging requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Will load single HTML page in client/build/index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to the Mongo DB
mongoose.Promise = Promise;

// If deployed, use the deployed database. Otherwise use the local economist database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const checkdb = mongoose.connection;

//Check DB connection
checkdb.once('open', function() {
  console.log("connected to mongoDB")
});

//Check for DB errors
checkdb.on("error", function(err) {
  console.log(err);
})

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//START SERVER
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});



