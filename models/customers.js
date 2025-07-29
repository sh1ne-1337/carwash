import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Customer = sequelize.define(
  "Customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    discount: {
      type: DataTypes.DECIMAL(4, 2),
      defaultValue: 0.0,
    },
  },
  {
    tableName: "customers",
    schema: "carwash",
    timestamps: false,
  }
);
