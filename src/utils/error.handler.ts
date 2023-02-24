import { Response } from "express";

const handlerHttp = (res: Response, error: string) => {
  res.status(500).send(error);
};

export { handlerHttp };
