"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("borrowers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "members",
          key: "id",
        },
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "books",
          key: "id",
        },
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
      },
      issue_date: {
        type: Sequelize.DATE,
      },
      return_date: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("borrowers");
  },
};
