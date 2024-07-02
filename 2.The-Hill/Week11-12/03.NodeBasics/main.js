/*
const arr = require('./part.js');
console.log(arr);

const os = require('os');
console.log(os.platform());
console.log(os.platform());

const fs = require("node:fs");
const folderName = "./test";
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdir(folderName, (err) => {
      if (err) {
        console.error("Error creating directory:", err);
      } else {
        console.log("Directory created successfully!");
        const content = "I am a beCode warrior";
        fs.writeFile("./test/notes.txt", content, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("bravo");
          }
        });
      }
    });
  }
} catch (err) {
  console.error(err);
}

try{
    if (fs.existsSync(folderName + '/notes.txt')){
        fs.readFile("./test/notes.txt", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
            }
        });
    }
} catch (err) {
    console.log(err)
}
/*
try {
    if (fs.existsSync(folderName + '/notes.txt')) {
        fs.unlink("./test/notes.txt", (err)=>{
            if(err) {
                console.log(err);
            }
        });

        fs.unlink("./test", (err)=>{
            if(err) {
                console.log(err);
            }
        });
    } else {
        fs.rmdir("./test", (err)=>{
            if(err) {
                console.log(err);
            }
        });
    }
} catch (err){
    console.log(err);
}*/