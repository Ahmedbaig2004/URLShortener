const {nanoid}=require("nanoid");
const URL=require("../models/url.model.js");
const generateShortUrl = async (req,res)=>{
    const body=req.body;
    const urls = await URL.find({})
    if(!body.url) return res.status(400).json({error:"URL is required"})
    const shortId=nanoid(8);
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy:req.user.user
    })
    return res.render("home", { id: shortId, urls: urls });
    

}
const viewURL =async(req,res)=>{
    const allURLS=await URL.find({});
    return res.json({allURLS});
}
const createShortId = async(req,res)=>{
    
        const shortId = req.params.shortid;
        const entry=await URL.findOneAndUpdate({
            shortId
        },{$push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }},{ new: true });
        res.redirect(entry.redirectUrl)
    }



module.exports={generateShortUrl,viewURL,createShortId};