import { Router } from "express";
import { getAddRes, getSubRes, getMultRes, getDivRes } from "../controllers/calc-controller.js";

const calcRouter = Router();

calcRouter.post('/add', getAddRes);
calcRouter.post('/sub', getSubRes);
calcRouter.post('/mult', getMultRes);
calcRouter.post('/div', getDivRes);

export default calcRouter;