const Sequelize = require("sequelize");

const sequelize = require("../utils/databse");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user_name: Sequelize.STRING,
    user_email: Sequelize.STRING,
});

module.exports = User;
