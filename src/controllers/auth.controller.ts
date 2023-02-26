import { Request, Response } from "express";
import { loginUser, registerNewUser, getAllUsers } from "../services/auth";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser({ email, password });
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

const getUser = async (req: Request, res: Response) => {
  try {
    const alluser = await getAllUsers();
    res.status(200).json(alluser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { login, register, getUser };
