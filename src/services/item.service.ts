import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car.model";

const inserCart = async (item: Car) => {
  const responseInsert = await CarModel.create(item);
  return responseInsert;
};

const getAllCarts = async () =>{
 return await CarModel.find();
}

const deleteCart = async (id: string) => {
  return await CarModel.findByIdAndDelete(id);
};
const updateCart = async (id: string, itemCart: Car) => {
  return await CarModel.findOneAndReplace({ _id: id }, itemCart, { new: true });
};

const findCart = async (id: string) => {
  return await CarModel.findById(id);
};

export { inserCart, getAllCarts, deleteCart, findCart, updateCart };
