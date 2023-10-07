const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/", postController.getPost);

router.get("/post/:postId", postController.postDetails);

module.exports = router;
