import {Router} from 'express';
import { login, register } from '../controllers/auth.controller';
const routerAuth = Router();

routerAuth.post("/auth/login", login);

routerAuth.post("/auth/register", register);

export default routerAuth