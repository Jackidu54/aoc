import {DaySolver} from "../../DaySolver.ts";

export class D202502 extends DaySolver {
    compute1(input: string): any {
        let res: number[] = []
        input.split(',')
            .map(item => item.split('-').map(i => parseInt(i)))
            .forEach(items => {
                [...(new Array(items[1] - items[0] + 1)).keys()].map(i => i + items[0])
                    .forEach(item => {
                            if ((item.toString().length % 2) === 0 && ((item % (Math.pow(10, (item.toString().length / 2)) + 1)) === 0)) {
                                res.push(item)
                            }
                        }
                    )
            })
        return res.reduce((a, b) => a + b)
    }

    compute2(input: string): any {
        let res: number[] = []
        input.split(',')
            .map(item => item.split('-').map(i => parseInt(i)))
            .forEach(items => {
                [...(new Array(items[1] - items[0] + 1)).keys()].map(i => i + items[0])
                    .forEach(item => {
                            let strItem = item.toString()
                            if (strItem.length > 1) {
                                for (let i = 0; i < item.toString().length / 2; i++) {
                                    if (strItem.match(new RegExp(`^(${item.toString().substring(0,i+1)})+$`))) {
                                        res.push(item)
                                        break
                                    }
                                }
                            }
                        }
                    )
            })
        return res.reduce((a, b) => a + b)
    }

}