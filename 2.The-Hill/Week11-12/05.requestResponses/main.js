const http = require("http");
const port = 3000;

const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, 'localhost', ()=>{
    console.log("Listening for request on port 3000");
});