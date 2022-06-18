const question = {
  type: "list",
  message: "Please select DB action:",
  name: "dbAction",
  choices: [
    {
      value: "getUsers",
      name: "Get all users",
      short: "users",
    },
    {
      value: "getBooks",
      name: "Get all books",
      short: "books",
    },
    {
      value: "quit",
      name: "Quit application",
      short: "quit",
    },
  ],
};

module.exports = question;
