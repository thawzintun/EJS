const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/create-post", postController.renderCreate);

router.post("/", postController.createPost);

router.post("/post/:postId", postController.deletePost);

router.get("/edit-post/:postId", postController.editPostPage);

router.post("/edit-post", postController.editPost);

module.exports = router;
