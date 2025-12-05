import {DaySolver} from "../../DaySolver.ts";

export class D202407 extends DaySolver {
    compute1(input: string): any {
        return "" + input.split('\n')
            .map(l => ({result: parseInt(l.split(": ")[0]), vals: l.split(": ")[1].split(" ").map(i => parseInt(i))}))
            .filter(l => this.generateOperations(l.vals, ['+', '*']).some(op => op.result === l.result))
            .reduce((acc, curr) => acc + curr.result, 0)

    }


    compute2(input: string): any {
        return "" + input.split('\n')
            .map(l => ({result: parseInt(l.split(": ")[0]), vals: l.split(": ")[1].split(" ").map(i => parseInt(i))}))
            .filter(l => this.generateOperations(l.vals, ['+', '*', 'c']).some(op => op.result === l.result))
            .reduce((acc, curr) => acc + curr.result, 0)
    }

    generateOperations(numbers: number[], operators: string[]): { operation: string, result: number }[] {
        const results: { operation: string, result: number }[] = [];

        function evaluateLeftToRight(expression: string): number {
            const tokens = expression.split(/(\+|\*|c)/);
            let result = parseInt(tokens[0]);
            for (let i = 1; i < tokens.length; i += 2) {
                const operator = tokens[i];
                const nextNumber = parseInt(tokens[i + 1]);
                if (operator === '+') {
                    result += nextNumber;
                } else if (operator === '*') {
                    result *= nextNumber;
                } else if (operator === 'c') {
                    result = parseInt(result + '' + nextNumber);
                }
            }
            return result;
        }

        function helper(current: string, index: number) {
            if (index === numbers.length) {
                results.push({operation: current, result: evaluateLeftToRight(current)});
                return;
            }

            for (const operator of operators) {
                helper(current + operator + numbers[index], index + 1);
            }
        }

        if (numbers.length > 0) {
            helper(numbers[0].toString(), 1);
        }

        return results;
    }

}