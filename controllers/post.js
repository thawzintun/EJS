const Post = require("../models/post");

exports.createPost = (req, res) => {
    const { title, photo, description } = req.body;
    Post.create({
        title,
        description,
        imgUrl: photo,
    })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.renderCreate = (req, res) => {
    res.render("addpost");
};

exports.getPost = (req, res) => {
    Post.findAll({
        order: [["title", "ASC"]],
    })
        .then((post) => {
            res.render("home", { postArr: post });
        })
        .catch((err) => console.log(err));
};

exports.postDetails = (req, res) => {
    const postId = findId(req);
    Post.findByPk(postId)
        .then((post) => {
            res.render("details", { post });
        })
        .catch((err) => console.log(err));
};

exports.deletePost = (req, res) => {
    const postId = findId(req);
    Post.destroy({
        where: {
            id: postId,
        },
    })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.editPostPage = (req, res) => {
    const postId = findId(req);
    Post.findByPk(postId)
        .then((post) => {
            res.render("editpost", { post });
        })
        .catch((err) => console.log(err));
};

exports.editPost = (req, res) => {
    const { id, title, photo, description } = req.body;
    Post.update(
        { title: title, description: description, imgUrl: photo },
        {
            where: {
                id: id,
            },
        }
    )
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

const findId = (req) => {
    return Number(req.params.postId);
};
