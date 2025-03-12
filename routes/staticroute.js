const express = require("express");
const URL=require("../models/url.model.js");

const router = express.Router();

router.get('/',async (req,res)=>{
    const urls = await URL.find({})
    res.render("home",{urls:urls});
})
module.exports=router;