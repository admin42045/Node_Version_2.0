// http file
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

//define the function serveStaticFile
const serveStaticFile = (res, path, contentType, respoonseCode = 200) => {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }

    res.writeHead(respoonseCode, { "Content-Type": contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  // routing with the help of switching
  const path = req.url.replace("//?()?$/", "").toLowerCase();
  switch (path) {
    case "/":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/contact":
      serveStaticFile(res, "/public/contact.html", "text/html");
      break;

    default:
      serveStaticFile(res, "/public/404.html", "text/html");
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is loading at port number: http://localhost:${port}/`);
});
