

const limittologgedinusers = async (req,res,next)=>{
    const { getUser } = require("../services/auth");


    
    console.log("Cookies received:", req.cookies); // Log cookies

    const userUid = req.cookies.uid;
    console.log("Extracted UID from cookies:", userUid);

    if (!userUid) {
        console.log("No UID found in cookies. Redirecting to login.");
        res.redirect('/login');
        
    }

    const user = getUser(userUid);
    console.log("Fetched user from session map:", user);

    if (!user) {
        console.log("User not found for session UID. Redirecting to login.");
        res.redirect('/login');
        
    }

    req.user = user;  // Attach user object to request
    console.log("User assigned to req.user:", req.user);
    next();

}
const checkAuth = async (req,res,next)=>{
   
    const { getUser } = require("../services/auth");

    
        console.log("Cookies received:", req.cookies); // Log cookies
    
        const userUid = req.cookies.uid;
        console.log("Extracted UID from cookies:", userUid);
    
        if (!userUid) {
            console.log("No UID found in cookies. Redirecting to login.");
            
        }
    
        const user = getUser(userUid);
        console.log("Fetched user from session map:", user);
    
        if (!user) {
            console.log("User not found for session UID. Redirecting to login.");
            
        }
    
        req.user = user;  // Attach user object to request
        console.log("User assigned to req.user:", req.user);
        next();
  
    
 
    
   

}


module.exports={limittologgedinusers,checkAuth };