"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      email: {
        type: DataTypes.STRING,
        required: true,
      },
      mobile: {
        type: DataTypes.INTEGER,
        required: true,
      },
      is_active: {
        type: DataTypes.ENUM("0", "1"),
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "staff",
      paranoid: true,
      underscored: true,
    }
  );
  return Staff;
};
