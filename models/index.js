const Activity = require("./Activities");
const Schedule = require("./Schedule");
const User = require('./User');

User.hasMany(Schedule, {
  foreignKey: 'user_id'
});

Schedule.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Activity, {
  foreignKey: 'user_id'
});

Activity.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
  User, 
  Schedule,
  Activity,
};
