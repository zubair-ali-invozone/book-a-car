const Sequelize = require("sequelize");

module.exports = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    last_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
});