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
// router.get("/activity", (req, res)=>{
//     res.render("activity", {title: "Activities"});
// });
// router.get("/about", (req, res)=>{
//     res.render("about", {title: "About Us"});
// });
module.exports = router;