import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);
    if (user === "that user dont exist") res.status(403).send(user);
    if (user === "password incorrect") res.status(403).send(user);
    if (user) res.json(user);
  } catch (error) {}
  // res.send("desde el login");
};

const register = async ({ body }: Request, res: Response) => {
  try {
    const registerUser = await registerNewUser(body);
    res.send(registerUser);
  } catch (error) {}
};

export { login, register };
