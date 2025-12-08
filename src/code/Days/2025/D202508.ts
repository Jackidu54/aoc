import {DaySolver} from "../../DaySolver.ts";

export class D202508 extends DaySolver {
    compute1(input: string): any {
        const pos = input.split("\n").map(line => line.split(",").map(i => parseInt(i))).map(line => ({x: line[0], y: line[1], z: line[2]}))

        const dist = pos.reduce((acc: number[][], curr, y) => [...acc, pos.map((point, x) =>
            x>=y ? Infinity : Math.sqrt(Math.pow(curr.x-point.x, 2) + Math.pow(curr.y-point.y, 2) + Math.pow(curr.z-point.z, 2))
        )] ,[])

        const circuitMap = new Map<number, number[]>()


        const distflatOrdered = dist.flat().filter(i => i!== Infinity).sort((a, b) => a-b)

        for(let i = 0 ;i<1000 ;i++){
            const min = distflatOrdered.shift()
            const minPos = dist.flat().findIndex(i => i===min)
            const minX =minPos%dist.length
            const minY =Math.floor(minPos/dist.length)
            const newtab = [...new Set([...(circuitMap.get(minY) ?? [minY]), ...(circuitMap.get(minX) ?? [minX])])]
            newtab.forEach(i => circuitMap.set(i, newtab))
            dist[minY][minX] = Infinity
        }
        return [...new Set([...circuitMap.values()])].map(i => i.length).sort((a,b) => b-a).slice(0,3).reduce((a,b) => a*b)
    }

    compute2(input: string): any {
        const pos = input.split("\n").map(line => line.split(",").map(i => parseInt(i))).map(line => ({
            x: line[0],
            y: line[1],
            z: line[2]
        }))

        const dist = pos.reduce((acc: number[][], curr, y) => [...acc, pos.map((point, x) =>
            x >= y ? Infinity : Math.sqrt(Math.pow(curr.x - point.x, 2) + Math.pow(curr.y - point.y, 2) + Math.pow(curr.z - point.z, 2))
        )], [])

        const circuitMap = new Map<number, number[]>()


        const distflatOrdered = dist.flat().filter(i => i !== Infinity).sort((a, b) => a - b)
        let x = 0
        while (true) {
            const min = distflatOrdered.shift()
            const minPos = dist.flat().findIndex(i => i === min)
            const minX = minPos % dist.length
            const minY = Math.floor(minPos / dist.length)

            x = pos[minX].x * pos[minY].x
            const newtab = [...new Set([...(circuitMap.get(minY) ?? [minY]), ...(circuitMap.get(minX) ?? [minX])])]
            if(newtab.length ===1000)
                break
            newtab.forEach(i => {
                circuitMap.set(i, newtab)
            })
        }

        return x
    }

}