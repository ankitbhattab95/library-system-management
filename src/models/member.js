"use strict";
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define(
    "member",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
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
      underscored: true,
    }
  );
  Members.associate = function (models) {
    // associations can be defined here
    Members.belongsToMany(models.book, {
      through: "borrower",
      foreignKey: "member_id",
      as: "books",
    });
  };
  return Members;
};
