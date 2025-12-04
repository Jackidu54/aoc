import {DaySolver} from "../../DaySolver.ts";

export class D202504 extends DaySolver {
    compute1(input: string): any {
        let res = 0
        input.replace(/@/g, "1")
            .replace(/\./g, "0")
            .split("\n")
            .map(line => line.split('').map(i => parseInt(i)))
            .forEach((line, y, tab) => line.forEach((place, x) => {
                if (place === 1 && tab.slice(y - 1 < 0 ? 0 : y - 1, y + 2 > tab.length ? tab.length : y + 2).map(line2 => line2.slice(x - 1 < 0 ? 0 : x - 1, x + 2 > line2.length ? line2.length : x + 2)).flat().reduce((a, b) => a + b) < 5) {
                    res++
                }
            }))

        return res
    }

    compute2(input: string): any {
        let res = 0
        const orig = input.replace(/@/g, "1")
            .replace(/\./g, "0")
            .split("\n")
            .map(line => line.split('').map(i => parseInt(i)))
        let oldres = -1
        while (oldres !== res) {
            oldres = res
            let copy = orig.map(line => line.map(i => i))
            copy.forEach((line, y, tab) => line.forEach((place, x) => {
                if (place === 1 && tab.slice(y - 1 < 0 ? 0 : y - 1, y + 2 > tab.length ? tab.length : y + 2).map(line2 => line2.slice(x - 1 < 0 ? 0 : x - 1, x + 2 > line2.length ? line2.length : x + 2)).flat().reduce((a, b) => a + b) < 5) {
                    res++
                    orig[y][x] = 0
                }
            }))
        }

        return res
    }

}