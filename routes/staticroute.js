const express = require("express");
const URL=require("../models/url.model.js");
const {limittologgedinusers,checkAuth}=require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get('/',async (req,res)=>{
    if(!req.user) return res.redirect('/login');
    const urls = await URL.find({createdBy:req.user._id})
    res.render("home",{urls});
})
router.get('/signup',(req,res)=>{
    res.render("signup")
})
router.get('/login',(req,res)=>{
    res.render("login")
})
module.exports=router;