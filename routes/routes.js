import express from "express";
import customerRoutes from "./customerRoutes.js";

const router = express.Router();

router.use("/customers", customerRoutes);

export default router;
