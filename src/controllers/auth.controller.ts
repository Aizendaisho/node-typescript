import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);
    if (user === "that user dont exist")return res.status(403).send(user);
    if (user === "password incorrect")return res.status(403).send(user);
    if (user) return res.json(user);
  } catch (error) {
   return res.status(500).send(error)
  } 
};

const register = async ({ body }: Request, res: Response) => {
  try {
    const registerUser = await registerNewUser(body);
    res.send(registerUser);
  } catch (error) {
    res.status(500).send(error)
  }
};

export { login, register };
