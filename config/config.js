import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: 'postgres',
  },
};