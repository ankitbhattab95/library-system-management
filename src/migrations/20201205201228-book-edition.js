"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("books", "edition", {
      type: Sequelize.STRING,
      defaultValue: "first",
      after: "available",
    });

    // await queryInterface.changeColumn("books", "title", {
    //   type: Sequelize.STRING,
    //   unique: true,
    // });
    await queryInterface.addConstraint("books", ["title", "edition"], {
      type: "unique",
      name: "title_edition",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("books", "title_edition");
    await queryInterface.removeColumn("books", "edition");
  },
};
