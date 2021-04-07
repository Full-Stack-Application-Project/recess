// const { getMaxListeners } = require("node:process");
const { User } = require("../models");

const userData = [
  {
    firstname: "Bill",
    lastname: "Jordan",
    email: "billj@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "Fred",
    lastname: "Chamberlain",
    email: "fredc@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "Rick",
    lastname: "Robertson",
    email: "rickr@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "Phillip",
    lastname: "Abdul-Jabar",
    email: "phila@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "Jamie",
    lastname: "Bird",
    email: "jamieb@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "John",
    lastname: "James",
    email: "johnj@gmail.com",
    password: "pass123",
    loggedIn: false
  },
  {
    firstname: "Amie",
    lastname: "Bryant",
    email: "amieB@gmail.com",
    password: "pass123",
    loggedIn: false
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
