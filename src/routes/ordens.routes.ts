import { Router } from "express";
import { getItem } from "../controllers/ordens.controller";

const ordensRouter = Router()

ordensRouter.get("/ordens",getItem)


export default ordensRouter;