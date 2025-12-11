import {DaySolver} from "../../DaySolver.ts";

export class D202511 extends DaySolver {
    compute1(input: string): any {
        const fromToMap = new Map<string, string[]>()
        input.split("\n").forEach(line => fromToMap.set(line.split(": ")[0], line.split(": ")[1].split(" ")))
        const recursiveSearch = (from: string): number=> {
            if(from === "out"){
                return 1
            }else{
                return fromToMap.get(from)!.map(dest => recursiveSearch(dest)).reduce((a,b) => a+b)
            }
        }
        return recursiveSearch("you")
    }

    compute2(input: string): any {
        const fromToMap = new Map<string, string[]>()
        input.split("\n").forEach(line => fromToMap.set(line.split(": ")[0], line.split(": ")[1].split(" ")))
        const recursiveSearch = (from: string, to: string): number=> {
            if(from === to){
                return 1
            }else{
                return fromToMap.get(from)?.map(dest => recursiveSearch(dest, to)).reduce((a,b) => a+b) ?? 0
            }
        }
        const ignore = (from: string, to: string)=> {
            if(fromToMap.has(from)){
                fromToMap.get(from)?.forEach(dest => ignore(dest, to))
                fromToMap.delete(from)
            }
        }
        let val = recursiveSearch("dac", "out")
        ignore("dac", "out")
        val =val * recursiveSearch("fft", "dac")
        ignore("fft", "dac")
        val =val * recursiveSearch("svr", "fft")
        return val
    }

}