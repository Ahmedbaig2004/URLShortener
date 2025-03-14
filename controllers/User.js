const User  = require('../models/user.model.js')
const {v4:uuidv4} =require("uuid")
const {setUser,getUser} = require('../services/auth.js');
const createUser = async (req,res)=>{
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password
    })
    res.redirect('/login')
}

const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email,password})
    if(!user){
        return res.render("login",{error:"Invalid Username or Password"});
    }
    const token=setUser(user);
    res.cookie("uid", token, { httpOnly: true, secure: false });
    res.redirect("/");
}

module.exports= {createUser,loginUser};