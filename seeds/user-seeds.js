const { User } = require("../models");

const userData = [
  {
    firstname: "Bill",
  },
  {
    firstname: "Fred",
  },
  {
    firstname: "Rick",
  },
  {
    firstname: "Phillip",
  },
  {
    firstname: "Jamie",
  },
  {
    firstname: "John",
  },
  {
    firstname: "Amie",
  },
  {
    firstname: "Samantha",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
