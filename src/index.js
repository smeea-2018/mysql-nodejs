require("dotenv").config();

const inquirer = require("inquirer");

const initDatabase = require("./db");
const question = require("./questions");

const init = async () => {
  try {
    const { executeQuery, closeConnection } = await initDatabase({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    let inProgress = true;

    while (inProgress) {
      const { dbAction } = await inquirer.prompt(question);

      if (dbAction === "getUsers") {
        const users = await executeQuery("SELECT * FROM users");

        console.table(users);
      }

      if (dbAction === "getBooks") {
        const books = await executeQuery("SELECT * FROM ??", ["books"]);

        console.table(books);
      }

      if (dbAction === "quit") {
        await closeConnection();
        inProgress = false;
        console.log("THANK YOU");
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Internal error | ${error.message}`);
  }
};

init();
