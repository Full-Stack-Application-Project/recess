// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize Model class
class Schedule extends Model {}

// set up fields and rules for Schedule model
Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    working: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_start: {
      type: DataTypes.INTEGER, // if  it is military time we can use integer, otherwise we will have to use a string.
      allowNull: false,
    },
    sleep_start_minute: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sleep_end_hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sleep_end_minute: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "schedule",
  }
);

module.exports = Schedule;
