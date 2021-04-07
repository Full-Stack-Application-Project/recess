const router = require("express").Router();

router.get("/", (req, res) => {
//   console.log(req.session.loggedIn + " this is at line 4 of home-routes");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("home");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

//ABOUT
router.get('/about', (req, res) => {
  res.render('about', { 
      title: 'About' 
  });
})

router.get("/signup", (req, res) => {
  res.render("signup", {
    title: "Sign Up",
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Activity-Schedule Page",
  });
});

// SLEEP/WORK route
router.get('/presetschedule', (req, res) => {
  res.render('presetschedule', { 
      title: 'Your Work & Sleep Schedule' 
  });
})
// SCHEDULE
router.get('/schedule', (req, res) => {
  res.render('schedule', { 
      title: 'Your Schedule' 
  });
})

// CATEGORIES
router.get('/categories', (req, res) => {
  res.render('categories', { 
      title: 'Categories' 
  });
})

// ACTIVITIES FORM 
router.get('/activity-form', (req, res) => {
  res.render('activity-form', { 
      title: 'Enter Activity Details' 
  });
}) 

// calendar route
router.get('/calendar', (req, res) => {
  res.render('calendar', { 
      title: 'Calendar' 
  });
})

module.exports = router;