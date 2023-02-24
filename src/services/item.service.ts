import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car.model";

const inserCart = async (item: Car) => {
  const responseInsert = await CarModel.create(item);
  return responseInsert;
};

const getAllCarts = async () =>{
 return CarModel.find()
}

export { inserCart,getAllCarts };
