import express, { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import { inserCart,getAllCarts } from "../services/item.service";

export const homeGet = async (req: Request, res: Response) => {
  try {
    const allCar = await getAllCarts()
    res.status(200).send(allCar);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homePost = async  (req: Request, res: Response) => {
  try {
    const responseItem = await inserCart(req.body);
    responseItem.save()
    res.status(200).send(responseItem);
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homeDelete = (req: Request, res: Response) => {
  try {
    res.status(200).send("este es el delete");
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homePut = (req: Request, res: Response) => {
  try {
    res.status(200).send("este es el put");
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};

export const homeId = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`este es tu id ${id}`);
  try {
  } catch (error) {
    handlerHttp(res, `error get user ${error}`);
  }
};
