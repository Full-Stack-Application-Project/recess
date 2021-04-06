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

// HOME
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Recess' 
    });
});
//LOGIN
app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'User Login' 
    });
})
//ABOUT
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About' 
    });
})
//SIGN UP
app.get('/signup', (req, res) => {
    res.render('signup', { 
        title: 'Sign Up' 
    });
})

// DASHBOARD
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { 
        title: 'Welcome' 
    });
})
// SLEEP/WORK route
app.get('/presetschedule', (req, res) => {
    res.render('presetschedule', { 
        title: 'Your Work & Sleep Schedule' 
    });
})
// SCHEDULE
app.get('/schedule', (req, res) => {
    res.render('schedule', { 
        title: 'Your Schedule' 
    });
})

// CATEGORIES
app.get('/categories', (req, res) => {
    res.render('categories', { 
        title: 'Categories' 
    });
})

// ACTIVITIES FORM 
app.get('/activity-form', (req, res) => {
    res.render('activity-form', { 
        title: 'Enter Activity Details' 
    });
}) 

// calendar route
app.get('/calendar', (req, res) => {
    res.render('calendar', { 
        title: 'Calendar' 
    });
})

// delete this  route
app.get('/form', (req, res) => {
    res.render('activity-form', { 
        title: 'Calendar' 
    });
})
// delete this route
app.get('/modal', (req, res) => {
    res.render('modal', { 
        title: 'Enter Activity Details' 
    });
})

app.get('/sevendays', (req, res) => {
    res.render('sevendays', { 
        title: 'weekly canlendar' 
    });
})

// set server -- delete when merging
app.listen(3001, () => {
    console.log('Server listening on port ', 3001);
})