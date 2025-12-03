import {DaySolver} from "../../DaySolver.ts";

export class D202503 extends DaySolver {
    compute1(input: string): any {
        return input.split("\n")
            .map(line => Math.max(...line.substring(0, line.length - 1).split("").map(letter => parseInt(letter))) * 10 +
                Math.max(...line.substring(line.split("").indexOf(Math.max(...line.substring(0, line.length - 1).split("").map(letter => parseInt(letter))).toString()) + 1, line.length).split("").map(letter => parseInt(letter))))
            .reduce((a, b) => a + b)

    }

    compute2(input: string): any {
        return input.split("\n")
            .map(line =>
                    line.split("").map(i => parseInt(i)).reduce((prev, curr, idx, tab) =>
                            prev.toString().length !== 12 && (curr === Math.max(...tab.slice(idx, line.length - 11 + (prev === 0 ? 0 : prev.toString().length)))) ? prev * 10 + curr : prev
                        , 0)
            )
        .reduce((a,b) => a+b, 0)
    }

}