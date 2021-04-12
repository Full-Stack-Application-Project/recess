// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Activity extends Model {}

// set up fields and rules for Activity model
Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    activity_category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_length: {
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
    modelName: "activity",
  }
);

module.exports = Activity;
