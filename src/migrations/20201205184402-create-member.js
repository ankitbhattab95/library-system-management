"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: Sequelize.STRING,
      mobile: Sequelize.BIGINT,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        defaultValue: "male",
      },
      dob: Sequelize.DATEONLY,
      member_type: {
        type: Sequelize.ENUM("regular", "plus", "prime", "elite"),
        defaultValue: "regular",
      },
      guest: {
        type: Sequelize.ENUM("0", "1"),
        defaultValue: "0",
      },
      active: {
        type: Sequelize.ENUM("0", "1"),
        defaultValue: "1",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("members");
  },
};
