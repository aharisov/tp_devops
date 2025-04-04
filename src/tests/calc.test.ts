// test calculations
import { Calc } from "../../dist/src/models/calc.js";

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
const app = require("../../dist/index.js");
const supertest = require("supertest");
const request = supertest(app);

it("Gets the calc/sum endpoint", async () => {
    const res = await request.post("/calc/sum");
});