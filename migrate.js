
import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import { User } from "./models/userModel.js";
import { Book } from "./models/bookModel.js";
import inquirer from "inquirer";

const rootSequelize = new Sequelize(
  "mysql://root:@localhost:3306/"
);

const { createDb } = await inquirer.prompt([
  {
    type: "confirm",
    name: "createDb",
    message:
      "Database 'finals2_crud_book_inventory' may not exist. Create it?",
    default: true,
  },
]);

try {
  if (createDb) {
    await rootSequelize.query(
      "CREATE DATABASE IF NOT EXISTS finals2_crud_book_inventory;"
    );
    console.log("Database created (if it did not exist)");
  }

  await sequelize.authenticate();
  console.log("Connected to MySQL database!");

  // Register both models before synchronization
  void User;
  void Book;

  await sequelize.sync({ alter: true });
  console.log("Tables created for registered models!");
} catch (err) {
  console.error("Migration failed:", err);
} finally {
  await sequelize.close();
  await rootSequelize.close();
}
