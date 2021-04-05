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

// Routing from server to Home, Login, SignUp, About
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

// Dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { 
        title: 'Welcome' 
    });
})

// schedule
app.get('/schedule', (req, res) => {
    res.render('schedule', { 
        title: 'Your Schedule' 
    });
})


// categories route
app.get('/categories', (req, res) => {
    res.render('categories', { 
        title: 'Categories' 
    });
})

// sleep route
app.get('/presetschedule', (req, res) => {
    res.render('presetschedule', { 
        title: 'Your Work & Sleep Schedule' 
    });
})

// activityform route
app.get('/activityform', (req, res) => {
    res.render('activityform', { 
        title: 'Enter Activity Details' 
    });
})

// set server -- delete when merging
app.listen(3001, () => {
    console.log('Server listening on port ', 3001);
})