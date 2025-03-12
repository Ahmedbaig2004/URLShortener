const express = require("express");
const {connectDB}= require("./connectmongo.js");
const URL=require("./models/url.model.js");

const urlrouter=require("./routes/url.route");
PORT=5000;
const app = express();

app.use(express.json())
connectDB('mongodb+srv://ahmedbaig6512:hackerZareshit123@sadaqasafar.uybuk.mongodb.net/UrlShortener').then(()=>console.log("DB CONNECTED"));
app.use('/url',urlrouter);
app.get('/:shortid',async (req,res)=>{
    const shortId = req.params.shortid;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }});
    res.redirect(entry.redirectUrl)
})
app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));