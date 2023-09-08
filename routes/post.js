const express = require("express");
const path = require("path");
const { post } = require("./admin");
const router = express.Router();

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "views", "homepage.html"));
    res.render("home", { postArr: post });
    console.log(post);
});

router.get("/post", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views/postpage.html"));
});

module.exports = router;
