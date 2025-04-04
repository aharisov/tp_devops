import { Request, Response } from "express";
import CalcService from "../services/calc-service.js";

const calcService = new CalcService();

export const getAddRes = async (req: Request, res: Response):Promise<void> => {
    try {
        const { num1, num2 } = req.body;

        if (isNaN(num1) || isNaN(num2)) {
            res.status(400).json({
                error: "Des nombres invalides.",
            });
        }

        const addRes = calcService.getAddRes(num1, num2);

        res.json({
            text: 'La somme est égale',
            value: addRes
        });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};

export const getSubRes = async (req: Request, res: Response): Promise<void> => {
    try {
        const { num1, num2 } = req.body;

        if (isNaN(num1) || isNaN(num2)) {
            res.status(400).json({
                error: "Des nombres invalides.",
            });
        }

        const subRes = calcService.getSubRes(num1, num2);

        res.json({
            text: 'La différence est égale',
            value: subRes
        });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};

export const getMultRes = async (req: Request, res: Response):Promise<void> => {
    try {
        const { num1, num2 } = req.body;

        if (isNaN(num1) || isNaN(num2)) {
            res.status(400).json({
                error: "Des nombres invalides.",
            });
        }

        const multRes = calcService.getMultRes(num1, num2);

        res.json({
            text: 'Le produit est égale',
            value: multRes
        });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};

export const getDivRes = async (req: Request, res: Response):Promise<void> => {
    try {
        const { num1, num2 } = req.body;

        if (isNaN(num1) || isNaN(num2)) {
            res.status(400).json({
                error: "Des nombres invalides.",
            });
        }

        if (num2 == 0) {
            res.status(500).json({
                error: "La division par zero est interdit.",
            });
        }

        const divRes = calcService.getDivRes(num1, num2);

        res.json({
            text: 'La division est égale',
            value: divRes
        });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};