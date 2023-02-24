import {Router} from 'express';
import { logMiddleware } from "../middlewares/log";
import {
  homeGet,
  homeDelete,
  homeId,
  homePost,
  homePut,
} from "../controllers/item.controller";
import { login, register } from "../controllers/auth.controller";

const router = Router();

//CRUD Cart

router.get("/home", homeGet);

router.post("/home", homePost);

router.put("/home/:id", homePut);

router.delete("/home/:id", homeDelete);

router.get("/home/:id", homeId);

//CRUD Register Login

router.post("/auth/login", login);

router.post("/auth/register", register);




export default router