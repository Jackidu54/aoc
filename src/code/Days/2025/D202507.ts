import {DaySolver} from "../../DaySolver.ts";

export class D202507 extends DaySolver {
    compute1(input: string): any {
        return input.split("\n").map(line => line.split(""))
            .reduce((acc: string [][], line, y) => [...acc,  y === 0 ?
                line :
                line.map((item, x) => acc[y-1][x] ==="S" ?
                    (item ==="^" ? "+" : "S") :
                    item)
                    .map((item, x, tab) => tab[x-1] ==="+" || tab[x+1] ==="+" ? "S": item)] , [])
            .map(item => item.join(""))
            .join("").match(/\+/g)!.length
    }

    compute2(input: string): any {
        const tab = input.split("\n").filter(line => !line.match(/^\.+$/)).map(line => line.split(""))
        const valueMap = new Map<string, number>()
        const countLaserPath = (x: number, y: number): number => {
            if(valueMap.has(x+","+y)){
                return valueMap.get(x+","+y)!
            }
            if(y >= tab.length){
                valueMap.set(x+","+y, 1)
            } else if (tab[y][x] === "^"){
                valueMap.set(x+","+y, countLaserPath(x-1,y+1) + countLaserPath(x+1, y+1))
            } else {
                valueMap.set(x+","+y, countLaserPath(x,y+1))
            }
            return valueMap.get(x+","+y)!
        }

        return countLaserPath(tab[0].findIndex(i=> i==="S"), 0)
    }

}