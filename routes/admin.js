const { log } = require("console");
const express = require("express");
const path = require("path");

const router = express.Router();

const post = [];

router.get("/create-post", (req, res) => {
    res.render("addpost");
});

router.post("/", (req, res) => {
    const { title, description } = req.body;
    post.push({
        title,
        description,
    });
    console.log(post);
    res.redirect("/");
});

module.exports = { adminRoute: router, post };
