const express = require("express");
const {connectDB}= require("./connectmongo.js");
const path = require("path");
const URL=require("./models/url.model.js");

const urlrouter=require("./routes/url.route");
const staticroute=require("./routes/staticroute");

PORT=5000;
const app = express();
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
connectDB('mongodb+srv://ahmedbaig6512:hackerZareshit123@sadaqasafar.uybuk.mongodb.net/UrlShortener').then(()=>console.log("DB CONNECTED"));
app.use('/url',urlrouter);
app.use('/',staticroute)

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));