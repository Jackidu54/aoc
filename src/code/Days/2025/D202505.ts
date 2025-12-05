import {DaySolver} from "../../DaySolver.ts";

export class D202505 extends DaySolver {
    compute1(input: string): any {
        const splitted = input.split("\n\n")
        const ranges = splitted[0].split("\n").map(i => i.split("-").map(j => parseInt(j)))
        const items = splitted[1].split("\n").map(j => parseInt(j))
        return items.reduce((prev, item) => prev + (ranges.some(range => range[0] <= item && range[1] >= item) ? 1 : 0), 0)

    }

    compute2(input: string): any {
        const splitted = input.split("\n\n")
        const ranges = splitted[0].split("\n").map(i => i.split("-").map(j => parseInt(j)))
            .sort((a, b) => a[0] - b[0])
        const mergeOrderedOverlap = (r1: number[], r2: number[]) => {
            if (r1[1] >= r2[0]) {
                return [[r1[0], Math.max(r1[1], r2[1])]]
            } else
                return [r2, r1]
        }
        let res: number[][] = []
        while (ranges.length > 1) {
            const tmp = mergeOrderedOverlap(ranges.shift()!, ranges.shift()!)
            ranges.unshift(tmp.shift()!)
            if (tmp.length === 1) {
                res.push(tmp.shift()!)
            }
        }
        res.push(ranges[0])
        return res.reduce((acc, range) => acc + range[1] - range[0] + 1, 0)

    }

}