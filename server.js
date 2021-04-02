//const sequelize = require('./config/connection');
const path = require('path');
const express = require('express');
const app = express();

const routes = require('./controllers'); 

const exphbs = require('express-handlebars');
//const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routing to main page, login page, calendar page, profile page
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Recess' 
    });
});
app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'User Login' 
    });
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