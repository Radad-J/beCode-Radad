/*const fs = require('fs');
const readStream = fs.createReadStream("./hugeText.html");

readStream.on("data", (chunk) => {
  console.log("--------- NEW CHUNK --------");
  console.log(chunk);
});
*/
const fs = require("fs");

const readstream = fs.createReadStream("./hugeText.html", {});

const writeStream = fs.createWriteStream("./newText.html");
/*
readstream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk);

  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});
*/
readstream.pipe(writeStream);