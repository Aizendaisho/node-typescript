import { Router } from "express";
import { getItem } from "../controllers/ordens.controller";
import { checkJWT } from "../middlewares/session";

const ordensRouter = Router()

ordensRouter.get("/ordens",checkJWT,getItem)


export default ordensRouter;