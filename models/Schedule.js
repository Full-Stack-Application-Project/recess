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
      autoIncrement: true
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    working: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work_start: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    work_end: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    sleep_start: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sleep_end: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "schedule"
  }
);

module.exports = Schedule;
