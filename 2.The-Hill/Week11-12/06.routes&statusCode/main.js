const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Define the path for the views directory
  const basePath = "./views";

  if (req.url === "/") {
    // Serve the index.html file
    fs.readFile(`${basePath}/index.html`, (err, data) => {
      if (err) {
        console.error("Error reading index.html:", err);
        res.statusCode = 500; // Internal Server Error
        res.end("Server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    // Serve the about.html file
    fs.readFile(`${basePath}/about.html`, (err, data) => {
      if (err) {
        console.error("Error reading about.html:", err);
        res.statusCode = 500; // Internal Server Error
        res.end("Server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about-us") {
    // Redirect /about-us to /about
    res.writeHead(301, { "Location": "/about" });
    res.end();
  } else {
    // Serve the 404.html file for any other URL
    fs.readFile(`${basePath}/404.html`, (err, data) => {
      if (err) {
        console.error("Error reading 404.html:", err);
        res.statusCode = 500; // Internal Server Error
        res.end("Server error");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Listening for requests on http://${HOST}:${PORT}`);
});
