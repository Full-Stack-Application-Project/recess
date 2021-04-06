const path = require('path');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// const session = require('express-session');
const routes = require('./controllers');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3006;

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// routing to main page, login page, calendar page, profile page
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Recess II' 
    });
});
app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'User Login' 
    });
})
app.post('/login', (req, res) => {
   console.log(req.body);
   const pw = req.body.password;
   if (pw!='test1234')
   {
       res.end("Invalid login");
   }
   else {
       res.redirect("/");
   }
   //res.json(req.body);
   res.end();
})
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About' 
    });
})
app.get('/signup', (req, res) => {
    res.render('signup', { 
        title: 'Sign Up' 
    });
})


// set server -- delete when merging
app.listen(3001, () => {
    console.log('Server listening on port ', 3001);
})
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

