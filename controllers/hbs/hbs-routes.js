const router = require("express").Router();


router.get("/home", (req, res)=>{
    res.render("home", {title: "Home"});
});
router.get("/login", (req, res)=>{
    res.render("login", {title: "Home"});
});
router.get("/signup", (req, res)=>{
    res.render("signup", {title: "Sign Up"});
});
router.get("/dashboard", (req, res)=>{
    res.render("dashboard", {title: "Dashboard"});
});
 router.get("/activity", (req, res)=>{
    res.render("activity", {title: "Activities"});
});
 router.get("/about", (req, res)=>{
    // console.log ("about");
    res.render("about", {title: "About Us"});
});
router.get("/categories", (req, res)=>{
    res.render("categories", {title: "categories"});
});
router.get("/activity-form", (req, res)=>{
    res.render("activity-form", {title: "Activity"});
});
router.get("/schedule", (req, res)=>{
    res.render("schedule", {title: "schedule"});
});
router.get("/presetschedule", (req, res)=>{
    res.render("presetschedule", {title: "Presetschedule"});
});

    
module.exports = router;