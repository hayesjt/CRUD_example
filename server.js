// modules needed to create functioning application 
var express = require("express");
var handlebars = require("express-handlebars")
var routes = require("./controller/book-controller")

// seeting up varible app and the port - process.env.PORT needed for Heroku
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

app.use("/", routes);
 
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
