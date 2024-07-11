const express = require("express");
const router = express.Router();

// Routes to serve HTML files
router.get("/", (req, res) => {
    res.send({data: "Here is your posts"});
  });

router.post("/", (req, res) => {
    res.send({data: "Post created"});
});

router.put("/", (req, res) => {
    res.send({data: "Post updated"});
});

router.delete("/", (req, res) => {
    res.send({data: "Post deleted :)"});
});

module.exports = router;