const posts = [];

exports.createPost = (req, res) => {
    const { title, photo, description } = req.body;
    posts.push({
        id: Math.random(),
        title,
        photo,
        description,
    });
    console.log(posts);
    res.redirect("/");
};

exports.renderCreate = (req, res) => {
    res.render("addpost");
};

exports.renderHomePage = (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "views", "homepage.html"));
    res.render("home", { postArr: posts });
    console.log(posts);
};

exports.postDetails = (req, res) => {
    const postId = Number(req.params.postId);
    const post = posts.find((post) => post.id == postId);
    console.log(post);
    res.render("details", { post });
};
