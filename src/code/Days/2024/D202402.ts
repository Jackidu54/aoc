import {DaySolver} from "../../DaySolver.ts";

export class D202402 extends DaySolver {
    compute1(input: string): any {
        return "" + input.split('\n')
            .map((line: string) => line.split(" ").map(item => parseInt(item)))
            .reduce((acc, line) => acc + ((
                line.every((v, index) => index === 0 || (v <= line[index - 1] + 3 && v > line[index - 1])) ||
                line.every((v, index) => index === 0 || (v >= line[index - 1] - 3 && v < line[index - 1]))
            ) ? 1 : 0), 0)
    }

    compute2(input: string): any {
        return "" + input.split('\n')
            .map((line: string) => line.split(" ").map(item => parseInt(item)))
            .map(line => [...line.map((_v, index) => line.filter((_v, index2) => index !== index2)), line])
            .reduce((acc, lines: number[][]) => acc + (lines.some(line => (
                line.every((v, index) => index === 0 || (v <= line[index - 1] + 3 && v > line[index - 1])) ||
                line.every((v, index) => index === 0 || (v >= line[index - 1] - 3 && v < line[index - 1]))
            )) ? 1 : 0), 0)
    }
}