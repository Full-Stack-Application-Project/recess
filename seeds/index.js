const seedActivities = require("./activity-seeds");
const seedSchedule = require("./schedule-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedActivities();
  console.log("\n----- ACTIVITIES SEEDED -----\n");

  await seedSchedule();
  console.log("\n----- SCHEDULE SEEDED -----\n");

  process.exit(0);
};

seedAll();
