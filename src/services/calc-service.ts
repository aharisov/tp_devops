import { Calc } from "../models/calc.js";

export default class CalcService {
    getAddRes(num1: number, num2: number): number {
        return Calc.add(num1, num2);
    }

    getSubRes(num1: number, num2: number): number {
        return Calc.sub(num1, num2);
    }

    getMultRes(num1: number, num2: number): number {
        return Calc.mult(num1, num2);
    }

    getDivRes(num1: number, num2: number): number {
        return Calc.div(num1, num2);
    }
}
