const express = require("express");

const router = express.Router();
const postController = require("../controllers/post");

router.get("/create-post", postController.renderCreate);

router.post("/", postController.createPost);

module.exports = router;
