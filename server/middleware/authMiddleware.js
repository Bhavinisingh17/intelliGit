const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const checkUserAuth = async(req, res, next) => {
    let token
    const {authorization} = req.headers


    if(authorization && authorization.startsWith("Bearer ")){
        try{
         token = authorization.split(' ')[1]

         //verify

         const {userId} = jwt.verify(token, process.env.JWT_SECRET)

         //get user from token
         req.user = await userModel.findById(userId).select("-password");
         next();

        }catch (error) {


    return res.status(401).json({
        message: "Invalid or expired token",
        error: error.message
    });
}
    }

    if (!token) {
        return res.status(401).json({
            message: "Not authorized, no token"
        });
    }
}

module.exports = checkUserAuth;