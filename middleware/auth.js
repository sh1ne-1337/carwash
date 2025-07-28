import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

export function authenticateToken(req, res, next) 
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, SECRET, (err, user) => 
    {
        if (err) return res.status(403).json({ message: "Invalid or expire token" });
        
        req.user = user;
        next();
    });
}