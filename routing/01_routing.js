// simple routing
const http = require("http");
const port = process.env.PORT || 4040;

const server = http.createServer((req, res) => {
  // pages between the routing
  const path = req.url.replace("/?(?:?.*)?$/", "").toLowerCase();
  switch (path) {
    case "/":
      res.writeHead(200, { "Context-Type": "text/plain" });
      res.end("Welcome to home page");
      break;
    case "/about":
      res.writeHead(200, { "Context-Type": "text/plain" });
      res.end("About page");
      break;

    case "/contact":
      res.writeHead(200, { "Context-Type": "text/plain" });
      res.end("Contact page");
      break;

    default:
      res.writeHead(404, { "Context0-Type": "text/plain" });
      res.end("Not Found 404");
      break;
  }
}); // end of createServe function

// listener always should be outside of the ceateServe function
server.listen(port, () => {
  console.log(`Server is loading at port number : ${port}`);
});
