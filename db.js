import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const config = 
{
    dbName: process.env.DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.PASSWORD,
    dbPort: process.env.PORT,
    dbHost: process.env.HOST,
};

export const sequelize = new Sequelize( process.env.DATABASE, process.env.DB_USER, process.env.PASSWORD,
{
    host: process.env.HOST,
    port: Number(process.env.PORT),
    dialect: 'postgres',
    logging: false,
});