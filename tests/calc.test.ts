// test calculations
import { Calc } from '../dist/src/models/calc.js';

describe('Check addition', () => {
    test('1 + 2 to equal 3', () => {
      expect(Calc.add(1, 2)).toBe(3);
    });
});
describe('Check subtraction', () => {
    test('5 - 2 to equal 3', () => {
      expect(Calc.sub(5, 2)).toBe(3);
    });
});
describe('Check multiplication', () => {
    test('8 * 2 to equal 16', () => {
      expect(Calc.mult(8, 2)).toBe(16);
    });
});
describe('Check division', () => {
    test('10 / 2 to equal 5', () => {
      expect(Calc.div(10, 2)).toBe(5);
    });
});

// test end-points
import {describe, expect, test} from '@jest/globals';
import app from "../dist/index.js";
import supertest from 'supertest';

const request = supertest(app);

describe("Calc API", () => {
    test("Checks calc/sum endpoint", async () => {
        const res = await request
            .post("/calc/add")
            .send({ num1: 5, num2: 3 });

        expect(res.status).toBe(200);
        expect(res.body.value).toBe(8);
    });
    test("Checks calc/sub endpoint", async () => {
        const res = await request
            .post("/calc/sub")
            .send({ num1: 5, num2: 3 });

        expect(res.status).toBe(200);
        expect(res.body.value).toBe(2);
    });
    test("Checks calc/div endpoint", async () => {
        const res = await request
            .post("/calc/div")
            .send({ num1: 4, num2: 2 });

        expect(res.status).toBe(200);
        expect(res.body.value).toBe(2);
    });
    test("Checks divison by 0", async () => {
        const res = await request
            .post("/calc/div")
            .send({ num1: 4, num2: 0 });

        expect(res.status).toBe(500);
    });
});