const jwt=require("jsonwebtoken");
const config =require("config");


module.exports=function(req,res,next){
    // get the token from the header
    const token = req.header("x-auth-token");

    //check if no token
    if(!token){
        return res.sendStatus(401).json({msg: "No token, authorization denied."})
    }
    //verify it token exists
    try{
        const decoded=jwt.verify(token, config.get("jwtSecret"));
        req.user=decoded.user;
        next();
    }
    catch(err){
        res.status(401).json({msg: "Token is not found"});
    }

}