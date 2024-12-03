import {DaySolver} from "../../DaySolver.ts";

export class D03 extends DaySolver {
    compute1(input: string): string {
        return "" + input.match(/mul\(\d+,\d+\)/g)!
            .map(i => i.replace(/mul\((\d+),(\d+)\)/, "$1,$2")
                .split(',')
                .map(i => parseInt(i)))
            .reduce((acc, curr) => acc + (curr[0] * curr[1]), 0)
    }

    compute2(input: string): string {
        return "" + input.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g)!
            .reduce((acc, curr) => acc[1][0] === "n" ? (curr === "do()" ? [acc[0], [""]] : acc) :
                    (curr === "don't()" ? [acc[0], ["n"]] :
                     curr.startsWith("mul") ? [[...acc[0], curr], [""]] : acc
                    )
                , [[], [""]])[0]
            .map(i => i.replace(/mul\((\d+),(\d+)\)/, "$1,$2")
                .split(',')
                .map(i => parseInt(i)))
            .reduce((acc, curr) => acc + (curr[0] * curr[1]), 0)
    }
}