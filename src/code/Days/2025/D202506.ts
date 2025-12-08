import {DaySolver} from "../../DaySolver.ts";

export class D202506 extends DaySolver {
    compute1(input: string): any {
        return input.split("\n").map(line => line.trim().split(/ +/g))
            .reduce((prev, curr, idx, tab) =>
                idx === tab.length - 1 ?
                    prev :
                    (curr.map((a, idx2) => prev[idx2] ?
                        prev[idx2] + tab[tab.length - 1][idx2] + a :
                        a)), []).map(item => eval(item))
            .reduce((a, b) => a + b)
    }

    compute2(input: string): any {
        return input.split("\n").map(line => line.split(""))

            .reduce((prev: string[], curr) =>
                curr.map((item, i) =>
                    (prev[i] || "").concat(item)
                ), [])
            .reduce((prev: string[], curr: string) => curr.match(/^ +$/) ? [...prev, ""] : [...prev.slice(0, -1), prev[prev.length - 1] + curr], [""])
            .map(item => eval(item.replace(/ +/g, /[+*]/.exec(item)![0]).replace(/\*+/g, "*").replace(/\++/g, "+").replace(/[+*]$|^[+*]/g, ""))
            )
            .reduce((a, b) => a + b)
    }

}