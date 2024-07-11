
const posts = [
  {
    title: "Post one",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "King Philippe",
  },
  {
    title: "Post two",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Barack Obama",
  },
  {
    title: "Post three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Nelson Mandela",
  },
];

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {posts, title: 'Home' });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: 'Contact' });
});


app.get("/about", (req, res) => {
  res.render("about", { title: 'About' });
});

app.listen("3000", () => {
  console.log("Server running on port 3000");
});