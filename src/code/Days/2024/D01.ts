import {DaySolver} from "../../DaySolver.ts";

export class D01 extends DaySolver {
    compute1(input: string): any {
        return "" + input.split('\n')
            .map((line: string) => line.split("   ").map(item => parseInt(item)))
            .reduce((res: number[][], line: number[]) => [
                [...res[0], line[0]].sort(),
                [...res[1], line[1]].sort()
            ], [[], []])
            .reduce((acc, tab, index, tabs) => index === 0 ? tab.reduce((acc2, val, index2) => acc2 + Math.abs(val - tabs[1][index2]), 0) : acc, 0)

    }

    compute2(input: string): any {
        const map = new Map<number, number>();
        return "" + input.split('\n')
            .map((line: string) => line.split("   ").map(item => parseInt(item)))
            .reduce((res: number[], line: number[]) =>
                [...res, map.set(line[1], (map.get(line[1]) ?? 0) + 1) ? line[0]: 0]
            , [])
            .reduce((acc2, val) => acc2 + (map.get(val) ?? 0) * val, 0)
    }

}