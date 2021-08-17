// require the exprees or import
const express = require("express");

// express fun store into a variable
const app = express();

// define the port number
const port = process.env.PORT || 3000;

// serving the static file and view
app.use(express.static(__dirname + "/public"));

// page routing
app.get("/", (req, res) => {
  res.type("text/plain");
  res.status(200);
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.type("text/plain");
  res.status(200);
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.type("text/plain");
  res.status(200);
  res.send("Contact page");
});

// custom 404 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.use((err, req, res, next) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () =>
  console.log(`Express server started on http://localhost:${port}`)
);
