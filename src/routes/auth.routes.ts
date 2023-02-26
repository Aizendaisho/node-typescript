import {Router} from 'express';
import { login, register, getUser } from "../controllers/auth.controller";
const routerAuth = Router();

routerAuth.post("/auth/login", login);

routerAuth.post("/auth/register", register);

routerAuth.get("/auth/users", getUser);

export default routerAuth