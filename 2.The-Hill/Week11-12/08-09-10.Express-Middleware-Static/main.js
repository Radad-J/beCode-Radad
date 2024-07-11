/*const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root });
});

const root = __dirname;

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

const obj = {
  school: "BeCode",
  year: 2023,
};

app.post("/", (req, res) => {
  // Sends json back
  res.json(obj);
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root });
});
*/

/*
const app = require("express")();

app.use(express.static("public"));

const verifyPassword = (req, res, next) => {
const { password } = req.query;
if (password === "IAmTheBigBoss") {
next();
} else {
res.send("Not authorized");
}
};

const root = __dirname;

app.get("/", (req, res) => {
res.sendFile("./views/index.html", { root });
});

app.get("/about", (req, res) => {
res.sendFile("./views/about.html", { root });
});

app.get("/secret", verifyPassword, (req, res) => {
res.sendFile("./views/secret.html", { root });
});

app.use((req, res) => {
res.sendFile("./views/404.html", { root });
});

app.listen(3000, () => {
console.log("listening to port 3000");
});
*/
const express = require("express");
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to verify the password for the /secret route
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "IAmTheBigBoss") {
    next();
  } else {
    res.send("Not authorized");
  }
};

const root = __dirname;

// Routes to serve HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(root, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(root, "views", "about.html"));
});

app.get("/secret", verifyPassword, (req, res) => {
  res.sendFile(path.join(root, "views", "secret.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(root, "views", "404.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
