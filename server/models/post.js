const {DataTypes} = require('sequelize')
const { sequelize } = require("../util/database")

module.exports = {
  Post: sequelize.define("post,", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    privateStatus: DataTypes.BOOLEAN,
  }),
};