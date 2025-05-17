import jwt from 'jsonwebtoken'

//this middleware is used for the APIs that require user should be logined
const authUser = (req, res, next) => {
    try {
        const {token}=req.headers //get the token from headers
        if(!token){
            return res.json({success:false,message:"Not Authorized"})
        }
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET) 
        req.body.userId=decoded_token.id
        next() //if the token is valid, move to the next middleware
            
            
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}
export default authUser