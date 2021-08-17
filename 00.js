// create a simple server
const http = require("http");
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World, port number is 5000");
});

server.listen(port, () => {
  console.log(`Server is loading on port number ${port}`);
});
