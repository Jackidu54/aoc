import {DaySolver} from "../../DaySolver.ts";

export class D202512 extends DaySolver {
    compute1(input: string): any {
        const strings = input.split("\n\n");
        //const shapes = strings.slice(0,-1).map(item => item.split('\n').slice(1).join("\n"))
        const puzzles = strings[strings.length-1].split("\n").map(line => ({size: line.split(": ")[0].split("x").map(i =>parseInt(i)), pieces: line.split(": ")[1].split(" ").map(qty => parseInt(qty))}))
        let val = puzzles.filter(puzzle => puzzle.size.reduce((a,b) => a*b) > puzzle.pieces.reduce((a,b) => a+b)*7)
        const tmpval = val.length
        val = val.filter(puzzle => puzzle.size.reduce((a,b) => (Math.floor(a/3)*Math.floor(b/3))) >= puzzle.pieces.reduce((a,b) => a+b))
        return val.length === tmpval ? tmpval : "now cry"
    }

    compute2(input: string): any {
        return input
    }

}