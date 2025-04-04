export abstract class Calc {
    public static add(num1: number, num2: number): number {
        console.info(num1 + num2);
        return num1 + num2;
    }

    public static sub(num1: number, num2: number): number {
        console.info(num1 - num2);
        return num1 - num2;
    }

    public static mult(num1: number, num2: number): number {
        console.info(num1 * num2);
        return num1 * num2;
    }

    public static div(num1: number, num2: number): number {
        console.info(num1 / num2);
        return num1 / num2;
    }
}