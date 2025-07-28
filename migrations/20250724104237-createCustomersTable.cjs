"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("carwash");
    await queryInterface.createTable(
      "customers",
      {
        customer_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        discount: {
          type: Sequelize.DECIMAL(4, 2),
          allowNull: false,
          defaultValue: 0.0,
        },
      },
      {
        schema: "carwash",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customers", { schema: "carwash" });
  },
};