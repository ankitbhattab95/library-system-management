"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "author",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      email: DataTypes.STRING,
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
  Author.associate = function (models) {
    // associations can be defined here
    Author.hasMany(models.book, { foreignKey: "author_id", as: "books" });
  };
  return Author;
};
