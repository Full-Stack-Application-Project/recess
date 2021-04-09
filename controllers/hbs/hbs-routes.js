const withAuth = require("../../utils/auth");

const router = require("express").Router();


router.get("/home", (req, res)=>{
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
      }
    res.render("home", {title: "Home"});
});
router.get("/login", (req, res)=>{
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
      }
    res.render("login", {title: "Home"});
});
router.get("/signup", (req, res)=>{
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
      }
    res.render("signup", {title: "Sign Up"});
});
router.get("/dashboard", withAuth, (req, res)=>{
    res.render("dashboard", {title: "Dashboard"});
});
 router.get("/activity", withAuth, (req, res)=>{
    res.render("activity", {title: "Activities"});
});
 router.get("/about", (req, res)=>{
    // console.log ("about");
    res.render("about", {title: "About Us"});
});
router.get("/categories", withAuth, (req, res)=>{
    res.render("categories", {title: "categories"});
});
router.get("/activity-form", withAuth, (req, res)=>{
    res.render("activity-form", {title: "Activity"});
});
router.get("/schedule", withAuth, (req, res)=>{
    res.render("schedule", {title: "schedule"});
});
router.get("/presetschedule", withAuth, (req, res)=>{
    res.render("presetschedule", {title: "Presetschedule"});
});
router.get("/sleepschedule", withAuth, (req, res)=>{
    res.render("sleepschedule", {title: "Sleepschedule"});
});
router.get("/workschedule", withAuth, (req, res)=>{
    res.render("workschedule", {title: "Workschedule"});
});

    
module.exports = router;