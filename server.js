const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(morgan('tiny'));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});