// let express = require('express');
// let bodyParser = require('body-parser');
// let methodOverride = require('method-override');
//
// let PORT = process.env.PORT || 8080;
//
// let app = express();
//
// // app.use(express.static("public"));
//
// app.use(bodyParser.urlencoded({ extended: false }));
//
// app.use(bodyParser.json());
//
// let exphbs = require('express-handlebars');
//
// app.engine('handlebars', exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
//
// let routes = require('./controllers/burgers_controller.js');
//
// app.use('/', routes);
//
// app.listen(PORT, function() {
//     console.log('Server listening on: http://localhost:' + PORT);
// });


const express = require("express");
const bodyParser = require("body-parser");
const expHbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

app.listen(PORT, () => {
    console.log("Server is listening on: http://localhost: " + PORT);
});