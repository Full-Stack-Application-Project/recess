//const sequelize = require('./config/connection');
const path = require('path');
const express = require('express');
// const session = require('express-session');
const routes = require('./controllers');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const app = express();

const exphbs = require('express-handlebars');

app.set ("view engine", "handlebars");
app.engine('handlebars',exphbs({
    extname:'handlebars',
    defaultLayout:'main',
    layoutsDir: __dirname+'/views/layouts',
    partialsDir:  __dirname+'/views/partials',
}));
const PORT = process.env.PORT || 3006;

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers'); 

const exphbs = require('express-handlebars');
//const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.listen(PORT, () => console.log('Now listening: '+PORT));
/*
sequelize.sync({ force: false }).then(() => {
  
});
*/
