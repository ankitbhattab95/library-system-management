"use strict";
module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define(
    "publisher",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
  Publisher.associate = function (models) {
    // associations can be defined here
    Publisher.hasOne(models.book, { foreignKey: "publisher_id" });
  };
  return Publisher;
};
