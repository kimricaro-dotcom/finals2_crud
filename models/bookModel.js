import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Book = sequelize.define("Book", {
  BookTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { Book };