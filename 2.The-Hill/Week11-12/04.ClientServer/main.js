const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body
    console.log('a request was made');  // Set the response header
    res.end('bye');
});

// Start the server and listen on the defined port
server.listen(port, 'localhost', () => {
    console.log(`Listening for requests on port ${port}`);
});