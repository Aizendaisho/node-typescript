import { model, Schema, Types, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const itemSchema = new Schema<Car>(
  {
    color: {
      type: String,
      required: [true, "Digite un color"]
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: [true, "Solo puede escoger entre gasoline o electric"]
    },
    year: {
      type: Number,
      required: [true, "Diga el año del carro"]
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Diga un precio valido"]
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CarModel = model("Car", itemSchema);
export default CarModel;