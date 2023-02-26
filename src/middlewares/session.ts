import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handler";


const checkJWT = async (req: Request, res: Response, next: NextFunction) =>{

    try {
        const jwtUser = req.headers.authorization?.split(' ')[1] || null;
     
            const tokenChecked = await verifyToken (`${jwtUser}`)
            if(!tokenChecked){
                res.status(400).send("token invalido")
               return next()
            }else{
                console.log("usuario valido")
               return next()
            }
            // console.log(jwtUser, tokenChecked)
            // next()
        
        
        next()

        
    } catch (error) {
        res.status(402).send("invalid sesion")
    }

}

export {checkJWT}