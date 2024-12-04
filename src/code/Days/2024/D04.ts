import {DaySolver} from "../../DaySolver.ts";

export class D04 extends DaySolver {
    compute1(input: string): string {
        return "" + [
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            ...input.split('\n')
                .map((line: string) => ("000" + line + "000").split("")),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0")
        ]
            .reduce((acc, line, index, tab) => acc + (
                line.reduce((acc2, letter, index2, tab2) => acc2 +
                        ((letter === "X" && tab2[index2 + 1] === "M" && tab2[index2 + 2] === "A" && tab2[index2 + 3] === "S") ? 1 : 0) +
                        ((letter === "X" && tab2[index2 - 1] === "M" && tab2[index2 - 2] === "A" && tab2[index2 - 3] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index + 1][index2] === "M" && tab[index + 2][index2] === "A" && tab[index + 3][index2] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index - 1][index2] === "M" && tab[index - 2][index2] === "A" && tab[index - 3][index2] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index + 1][index2+1] === "M" && tab[index + 2][index2+2] === "A" && tab[index + 3][index2+3] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index + 1][index2-1] === "M" && tab[index + 2][index2-2] === "A" && tab[index + 3][index2-3] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index - 1][index2+1] === "M" && tab[index - 2][index2+2] === "A" && tab[index - 3][index2+3] === "S") ? 1 : 0) +
                        ((letter === "X" && tab[index - 1][index2-1] === "M" && tab[index - 2][index2-2] === "A" && tab[index - 3][index2-3] === "S") ? 1 : 0)
                    , 0)
            ), 0)
    }

    compute2(input: string): string {
        return "" + [
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            ...input.split('\n')
                .map((line: string) => ("000" + line + "000").split("")),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0"),
            new Array(input.split('\n')[0].length).fill("0")
        ]
            .reduce((acc, line, index, tab) => acc + (
                line.reduce((acc2, letter, index2) => acc2 +
                        ((letter === "A" &&
                            tab[index + 1][index2+1] === "S" &&
                            tab[index + 1][index2-1] === "M" &&
                            tab[index - 1][index2+1] === "S" &&
                            tab[index - 1][index2-1] === "M"
                        ) ? 1 : 0) +
                        ((letter === "A" &&
                            tab[index + 1][index2+1] === "M" &&
                            tab[index + 1][index2-1] === "M" &&
                            tab[index - 1][index2+1] === "S" &&
                            tab[index - 1][index2-1] === "S"
                        ) ? 1 : 0) +
                        ((letter === "A" &&
                            tab[index + 1][index2+1] === "S" &&
                            tab[index + 1][index2-1] === "S" &&
                            tab[index - 1][index2+1] === "M" &&
                            tab[index - 1][index2-1] === "M"
                        ) ? 1 : 0) +
                        ((letter === "A" &&
                            tab[index + 1][index2+1] === "M" &&
                            tab[index + 1][index2-1] === "S" &&
                            tab[index - 1][index2+1] === "M" &&
                            tab[index - 1][index2-1] === "S"
                        ) ? 1 : 0)
                    , 0)
            ), 0)
    }
}