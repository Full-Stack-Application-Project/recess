const router = require("express").Router();
const withAuth = require('../utils/auth');



router.get("/", (req, res) => {
//   console.log(req.session.loggedIn + " this is at line 4 of home-routes");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("home");
});

// Login Page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { 
      title: 'About' 
  });
})

// Signup Page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup", {
    title: "Sign Up",
  });
});

// Home/dashboard Page
router.get("/dashboard", withAuth, (req, res) => {
  res.render("dashboard", {
    title: "Home Page",
  });
});

// SLEEP/WORK Form
router.get('/presetschedule', withAuth, (req, res) => {
  res.render('presetschedule', { 
      title: 'Your Work & Sleep Schedule' 
  });
})
// Weekly Schedule Page
router.get('/schedule', withAuth, (req, res) => {
  res.render('schedule', { 
      title: 'Your Schedule' 
  });
})

// Categories
router.get('/categories', withAuth, (req, res) => {
  res.render('categories', { 
      title: 'Categories' 
  });
})

// Activity Forms 
router.get('/exercise-form', withAuth, (req, res) => {
  res.render('exercise-form', { 
      title: 'Exercise Form' 
  });
}) 

// mindfulness form
router.get('/mindfulness-form', withAuth, (req, res) => {
  res.render('mindfulness-form', { 
      title: 'Mindfulness Form' 
  });
}) 

// academics form
router.get('/academics-form', withAuth, (req, res) => {
  res.render('academics-form', { 
      title: 'Academic Form' 
  });
}) 

//relaxation form
router.get('/relaxation-form', withAuth, (req, res) => {
  res.render('relaxation-form', { 
      title: 'Relaxation Form' 
  });
}) 

// other form
router.get('/other-form', withAuth, (req, res) => {
  res.render('other-form', { 
      title: 'Other Form' 
  });
}) 

// Calendar Page
router.get('/calendar', withAuth, (req, res) => {
  res.render('calendar', { 
      title: 'Calendar' 
  });
})


module.exports = router;
