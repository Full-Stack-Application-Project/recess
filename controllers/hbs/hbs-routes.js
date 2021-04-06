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
router.get("/form1/", (req, res)=>{
    //const formNum = parseInt(req.params.fn) ;
    const formNum = req.params.fn;
    const forms=['form1', 'form2'];
   // console.log(forms[formNum]);
 //  const form = forms[formNum]+"";
    switch (formNum){
        case '1':
            res.render("form1", {title:"Form "});
            break;
        case '2':
            res.render("form2", {title:"Form "});
            break;
    }
    
  //  res.write ("form: "+formNum);
 
    //res.end();
   // res.render("categories", {title: "categories"});
});
module.exports = router;