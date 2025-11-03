import {DaySolver} from "../../DaySolver.ts";

export class D09 extends DaySolver {
    compute1(input: string): any {
        const res = input.split('')
            .reduce((acc: { block: string[], space: string[] }, char, pos) => ({
                    block: acc.block.concat(((pos % 2) === 0 ? [char] : [])),
                    space: acc.space.concat(((pos % 2) === 1 ? [char] : []))
                }
            ), {block: [], space: []})
        let blockID = 0
        const data = []
        while (res.block.length > 0) {
            const l = res.block.shift()!
            data.push(...(new Array<number>(parseInt(l)).fill(blockID)))
            if (res.space.length > 0) {
                const l = res.space.shift()!
                data.push(...(new Array<number>(parseInt(l)).fill(-1)))
            }
            blockID++
        }
        const l = data.filter(t => t !== -1).length - 1
        for (let i = 0; i < l; i++) {
            if (data[i] === -1) {
                data.reverse()
                const endValueIdx: number = data.findIndex((v) => v !== -1)!;
                const tmp: number = data[endValueIdx]
                data[endValueIdx] = -1
                data.reverse()
                data[i] = tmp;
            }
        }
        return data.filter(t => t !== -1).reduce((acc, val, idx) => acc + val * idx, 0)

    }

    compute2(input: string): any {
        const res = input.split('')
            .reduce((acc: { block: boolean, qty: number, blockID: number }[], char, pos) => (
                [...acc, {qty: parseInt(char), blockID: (pos % 2) === 0 ? pos / 2 : 0, block: (pos % 2) === 0}]
            ), [])


        const data = []
        while (res.length > 0) {
            const l = res.block.shift()!
            data.push(...(new Array<number>((l.char)).fill(l.blockID)))
            if (res.space.length > 0) {
                const l = res.space.shift()!
                data.push(...(new Array<number>(l).fill(-1)))
            }
        }

        return data//.map(t => t !== -1 ? t : 0).reduce((acc, val, idx) => acc + val * idx, 0)
    }

}