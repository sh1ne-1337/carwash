import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { sequelize } from "./db.js";
import customerRoutes from "./routes/customerRoutes.js";
import logger from './logger.js';

dotenv.config();

logger.info('Server started successfully on port 3000');

const app = express();
app.use(express.json());
app.use(cookieParser());

sequelize.authenticate()
    .then(() => 
    {
        logger.info('Connected to PostgreSQL database');
        return sequelize.sync(); 
    })
    .catch((err) => { console.error("Error connecting:", err); });

app.use("/customers", customerRoutes);

app.listen(3000);