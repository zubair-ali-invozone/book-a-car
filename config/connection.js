const Sequelize = require("sequelize");

const sequelize = new Sequelize('express-auth', 'postgres', 'invozone-8144', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
global.sequelize = sequelize;