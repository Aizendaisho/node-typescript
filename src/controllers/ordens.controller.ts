import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

const getItem = async (req: Request, res: Response) => {
  try {
    
    res.status(200).send("todo bien de orden");
  } catch (error) {
    handlerHttp(res, `error get orden ${error}`);
  }
};

export { getItem };
