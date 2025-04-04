import { Router } from "express";
import calcRouter from "./calc.js";

const router = Router();

router.use('/calc', calcRouter);

export default router;