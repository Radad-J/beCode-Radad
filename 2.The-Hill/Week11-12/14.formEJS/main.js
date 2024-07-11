
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let data = [];
app.get("/", (req, res) => {
  res.render("index", {data});
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  data.push(req.body);
  res.redirect('/');
});

app.listen("3000", () => {
  console.log("Server running on port 3000");
});