"use strict";
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    "staff",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
      underscored: true,
    }
  );
  Staff.associate = function (models) {
    // associations can be defined here
  };
  return Staff;
};
