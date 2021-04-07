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

router.get("/schedule", (req, res) => {
  res.render("schedule", {
    title: "Activity-Schedule Page",
  });
});

module.exports = router;
