import { verify, encrypt } from "../utils/pass.handler";
import { UserReady } from "../interfaces/userReady.interface";
import { UserModel } from "../models/userReady";
import { generateToken, verifyToken } from "../utils/jwt.handler";
import { UserAuthInterface } from "../interfaces/userAuth.interface";

const registerNewUser = async ({ email, password, name }: UserReady) => {
  const checkUser = await UserModel.findOne({ email: email });
  if (checkUser) return "Is already registered";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: UserAuthInterface) => {
  const checkUser = await UserModel.findOne({ email: email });
  if (!checkUser) return "that user dont exist";
  const verification = await verify(password, checkUser.password);
  if (!verification) return "password incorrect";
  const token = generateToken(checkUser.email);
  return { user: checkUser.name, token };
};

export { loginUser, registerNewUser };
