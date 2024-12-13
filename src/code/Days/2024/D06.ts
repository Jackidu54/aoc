import {DaySolver} from "../../DaySolver.ts";

export class D06 extends DaySolver {

    // input contains only ".", "#", "^", "v", "<", ">", "\n"
    compute1(input: string): string {
        const map = new Map<string, string>()
        const knownPos: string[] = []
        input.split('\n').forEach((line, y) =>
            line.replace(/[\^v<>]/, '.').split('').forEach((char, x) => map.set(x + "," + y, char)))
        const startPos = input.split('\n').reduce((acc, line, y) =>
            line.match(/[\^v<>]/) ?
                line.split('').find(c => c.match(/[\^v<>]/)) + "," + line.split('').findIndex(c => c.match(/[\^v<>]/)) + "," + y : acc, '')

        const map2 = new Map<string, { m: number[], npos: string }>
        map2.set("^", {m: [0, -1], npos: ">"})
        map2.set(">", {m: [1, 0], npos: "v"});
        map2.set("v", {m: [0, 1], npos: "<"});
        map2.set("<", {m: [-1, 0], npos: "^"});
        const rec = (pos: string) => {
            if (knownPos.includes(pos)) return
            else {
                knownPos.push(pos)
                const tmp2 = pos.split(",")
                const tmp = map2.get(tmp2[0])!
                const newPos = [parseInt(tmp2[1]) + tmp.m[0], (parseInt(tmp2[2]) + tmp.m[1])]
                if(newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= input.split('\n')[0].length || newPos[1] >= input.split('\n').length){
                    return
                } else if ( map.get(newPos[0] + "," + newPos[1]) === "#") {
                    tmp2[0] = map2.get(tmp2[0])!.npos
                } else  {
                    tmp2[1] = newPos[0] + ""
                    tmp2[2] = newPos[1] + ""
                }
                rec(tmp2.join(","))
            }
        }
        rec(startPos)
        return Array.from(new Set(knownPos.map(i => i.substring(1)))).length + "";
    }

    compute2(input: string): string {
        const map = new Map<string, string>()
        const posParcours: string[] = []
        input.split('\n').forEach((line, y) =>
            line.replace(/[\^v<>]/, '.').split('').forEach((char, x) => map.set(x + "," + y, char)))

        const startPos = input.split('\n').reduce((acc, line, y) =>
            line.match(/[\^v<>]/) ?
                line.split('').find(c => c.match(/[\^v<>]/)) + "," + line.split('').findIndex(c => c.match(/[\^v<>]/)) + "," + y : acc, '')

        const map2 = new Map<string, { m: number[], npos: string }>
        map2.set("^", {m: [0, -1], npos: ">"})
        map2.set(">", {m: [1, 0], npos: "v"});
        map2.set("v", {m: [0, 1], npos: "<"});
        map2.set("<", {m: [-1, 0], npos: "^"});

        let tmp2 = []
        let tmp = null
        let newPos = []

        const rec = (pos: string, knownPos: string[]) => {
            if (knownPos.includes(pos)) return 1
            else {
                knownPos.push(pos)
                tmp2 = pos.split(",")
                tmp = map2.get(tmp2[0])!
                newPos = [parseInt(tmp2[1]) + tmp.m[0], (parseInt(tmp2[2]) + tmp.m[1])]
                if(newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= input.split('\n')[0].length || newPos[1] >= input.split('\n').length){
                    return 0
                } else if ( map.get(newPos[0] + "," + newPos[1]) === "#") {
                    tmp2[0] = map2.get(tmp2[0])!.npos
                } else  {
                    tmp2[1] = newPos[0] + ""
                    tmp2[2] = newPos[1] + ""
                }
                return rec(tmp2.join(","), knownPos)
            }
        }
        rec(startPos, posParcours)
        let acc=0, cnt = 0
        const distincPos = Array.from(new Set(posParcours.map(i => i.substring(2))))
        console.log(distincPos.length)
        distincPos.filter(i => i !== startPos.substring(2)).forEach((val) => {
            map.set(val, "#")
            acc += rec(startPos, [])
            map.set(val,".")
            console.log(cnt++)
        })
        return acc + ""
    }
}