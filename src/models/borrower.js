"use strict";
module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define(
    "borrower",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      issue_date: DataTypes.DATEONLY,
      return_date: DataTypes.DATEONLY,
    },
    {
      underscored: true,
    }
  );
  Borrower.associate = function (models) {
    // associations can be defined here
  };
  return Borrower;
};
