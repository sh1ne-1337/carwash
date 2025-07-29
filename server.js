import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { sequelize } from "./db.js";
import customerRoutes from "./routes/customerRoutes.js";
import logger from './logger.js';

dotenv.config();

logger.info('Server started successfully on port 3000');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(morgan('combined', 
{
    stream: 
    {
        write: (message) => logger.http(message.trim())
    }
}));

sequelize.authenticate()
    .then(() => 
    {
        logger.info('Connected to PostgreSQL database');
        return sequelize.sync(); 
    })
    .catch((err) => 
    { 
        logger.error("Error connecting:", err);
    });

app.use("/customers", customerRoutes);

app.listen(3000, () => 
{
    logger.info(`Server started successfully on port 3000`);
});