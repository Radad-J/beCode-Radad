const express = require("express");
const router = express.Router();

// Routes to serve HTML files
router.get("/", (req, res) => {
    res.send({data: "Comments"});
  });

router.post("/", (req, res) => {
    res.send({data: "Comment created"});
});

router.put("/", (req, res) => {
    res.send({data: "Comment updated"});
});

router.delete("/", (req, res) => {
    res.send({data: "Comment deleted :)"});
});

module.exports = router;