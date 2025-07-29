import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { STATUS_CODES } from "../common/statusCode.js";

dotenv.config();

const SECRET = process.env.SECRET;

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ message: "No token provided" });

  jwt.verify(token, SECRET, (err, user) => {
    if (err)
      return res
        .status(STATUS_CODES.FORBIDDEN)
        .json({ message: "Invalid or expire token" });

    req.user = user;
    next();
  });
}
