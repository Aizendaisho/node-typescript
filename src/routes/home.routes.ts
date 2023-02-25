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

const routerHome = Router();

//CRUD Cart

routerHome.get("/home", homeGet);

routerHome.post("/home", homePost);

routerHome.put("/home/:id", homePut);

routerHome.delete("/home/:id", homeDelete);

routerHome.get("/home/:id", homeId);

//CRUD Register Login

// routerHome.post("/auth/login", login);

// routerHome.post("/auth/register", register);




export default routerHome