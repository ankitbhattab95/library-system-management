"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Book.belongsToMany(models.author, {
      //   through: {
      //     model: models.bookAuthorMap,
      //   },
      // });
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      copies: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      available: {
        type: DataTypes.ENUM("0", "1"),
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "book",
      paranoid: true,
      underscored: true,
    }
  );
  return Book;
};
