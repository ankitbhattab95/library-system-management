"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
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
      underscored: true,
      paranoid: true,
    }
  );
  Book.associate = function (models) {
    // associations can be defined here
    Book.belongsToMany(models.member, {
      through: "borrower",
      foreignKey: "book_id",
      as: "issuers",
    });
    Book.belongsTo(models.publisher, {
      foreignKey: "publisher_id",
      as: "publisher",
    });
    Book.belongsTo(models.author, { foreignKey: "author_id", as: "author" });
  };
  return Book;
};
