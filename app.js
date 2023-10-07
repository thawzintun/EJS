const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./utils/databse");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const postRoute = require("./routes/post");
const adminRoute = require("./routes/admin");
const Post = require("./models/post");
const User = require("./models/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    User.findByPk(1)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use("/post", (req, res, next) => {
    console.log("Post Middleware");
    next();
});

app.use("/", (req, res, next) => {
    next();
});

app.use((req, res, next) => {
    console.log("This is parent middleware");
    next();
});

app.use("/admin", (req, res, next) => {
    console.log("admin middleware approved!");
    next();
});

app.use(postRoute);
app.use("/admin", adminRoute);

Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Post);

sequelize
    .sync()
    .then(() => {
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({
                user_name: "Admin",
                user_email: "admin@gmail.com",
            });
        }
        return user;
    })
    .then((user) => {
        console.log(user);
        app.listen(8080);
    })
    .catch((err) => console.log(err));
