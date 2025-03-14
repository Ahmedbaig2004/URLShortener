require('dotenv').config();

const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser')
const {limittologgedinusers,checkAuth}=require("./middlewares/auth.middleware.js");

const {connectDB}= require("./connectmongo.js");
const URL=require("./models/url.model.js");

const userrouter=require("./routes/user.route.js")
const urlrouter=require("./routes/url.route");
const staticroute=require("./routes/staticroute");

PORT=5000;

const app = express();


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())


connectDB('mongodb+srv://ahmedbaig6512:hackerZareshit123@sadaqasafar.uybuk.mongodb.net/UrlShortener').then(()=>console.log("DB CONNECTED"));


app.use('/url',limittologgedinusers,urlrouter);
app.use('/user',userrouter)
app.use('/',checkAuth,staticroute)

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));