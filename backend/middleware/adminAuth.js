import jwt from 'jsonwebtoken'

//this middleware is used for the APIs that require admin permission
const adminAuth = (req, res, next) => {
    try {
        const {token}=req.headers //get the token from headers
        if(!token){
            return res.JSON({success:false,message:"Not Authorized"})
        }
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET) 
        //verify the token
        if(decoded_token !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.JSON({success:false,message:"Not Authorized"})
        }
        next() //if the token is valid, move to the next middleware
            
            
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}
export default adminAuth