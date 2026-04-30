import config from "../../config.mjs";
import jwt from "jsonwebtoken"
const authentication = (req, res, next) => {
    let token = req.headers["authentication"];
    token = token.split(" ")[1];
        if(!token){
        return res.status(401).send({
            message: "failed",
            error: "Please login to access this resource"
        })
    };
    jwt.verify(token, config.secerttoken, (err, decodedtoken) => {
         if (err) {
           return res
             .status(401)
             .send({ message: "failed", error: "Invalid credentials" });
        }
        req.user = decodedtoken;
        next();
    })
}
export default authentication;