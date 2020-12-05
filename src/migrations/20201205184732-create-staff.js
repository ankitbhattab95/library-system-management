"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("staffs", {
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
      gender: Sequelize.ENUM("male", "female"),
      email: {
        type: Sequelize.STRING,
        required: true,
      },
      mobile: {
        type: Sequelize.INTEGER,
        required: true,
      },
      is_active: {
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
    await queryInterface.dropTable("staffs");
  },
};
