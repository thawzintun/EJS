const Sequelize = require("sequelize");

const sequelize = require("../utils/databse");

const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
    },
    imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Post;
