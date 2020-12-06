"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class borrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  borrower.init(
    {
      issue_date: DataTypes.DATE,
      return_date: DataTypes.DATE, // issue date + 7
    },
    {
      sequelize,
      modelName: "borrower",
    }
  );
  return borrower;
};
