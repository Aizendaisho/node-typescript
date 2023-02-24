import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import {
  inserCart,
  getAllCarts,
  deleteCart,
  findCart,
  updateCart,
} from "../services/item.service";

export const homeGet = async (req: Request, res: Response) => {
  try {
    const allCar = await getAllCarts();
    res.status(200).send(allCar);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homePost = async (req: Request, res: Response) => {
  try {
    const responseItem = await inserCart(req.body);
    responseItem.save();
    res.status(200).send(responseItem);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homeDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartDelete = await deleteCart(id);
    if (cartDelete)
      res.status(200).send(`el vehiculo ${cartDelete.name} ha sido borrado `);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homePut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartReplace = await updateCart(id, req.body);
    if (cartReplace)
      res.status(200).send(`El vehiculo se ha actualizado${cartReplace.name}`);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homeId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartFinded = await findCart(id);
    res.status(200).send(cartFinded);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};
