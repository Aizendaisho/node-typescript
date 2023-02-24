import { model, Schema, Types, Model } from "mongoose";
import { UserReady } from "../interfaces/userReady.interface";

const userSchema = new Schema<UserReady>(
  {
    email: {
      type: String,
      required: [true, "inserte un eamil valido"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "hola tu",
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const UserModel = model("User", userSchema);
