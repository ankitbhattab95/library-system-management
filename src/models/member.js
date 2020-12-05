"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  member.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      mobile: DataTypes.BIGINT,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        defaultValue: "male",
      },
      dob: DataTypes.DATEONLY,
      member_type: {
        type: DataTypes.ENUM("regular", "plus", "prime", "elite"),
        defaultValue: "regular",
      },
      guest: {
        type: DataTypes.ENUM("0", "1"),
        defaultValue: "0",
      },
      active: {
        type: DataTypes.ENUM("0", "1"),
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "member",
      underscored: true,
      paranoid: true,
    }
  );
  return member;
};
