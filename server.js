import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { sequelize } from "./db.js";
import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

sequelize.authenticate()
    .then(() => 
    {
        console.log("Connected to PostgreSQL database");
        return sequelize.sync(); 
    })
    .then(() => { console.log("Tables synced"); })
    .catch((err) => { console.error("Error connecting:", err); });

app.use("/customers", customerRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));