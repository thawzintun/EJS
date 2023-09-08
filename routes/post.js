const express = require("express");
const path = require("path");
const { post } = require("./admin");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/", postController.renderHomePage);

router.get("/post/:postId", postController.postDetails);

module.exports = router;
