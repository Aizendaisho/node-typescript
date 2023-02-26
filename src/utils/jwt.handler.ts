import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "123456";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" });
  return jwt;
};

const verifyToken = async (token: string) => {
  return await verify(token,JWT_SECRET)
};

export { generateToken, verifyToken };
