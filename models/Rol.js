const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Database/databaseConnection");
const Rol = sequelize.define("roles", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
});

module.exports = Rol;