import {DaySolver} from "../../DaySolver.ts";

export class D202501 extends DaySolver {
    compute1(input: string): any {
        let cnt = 0;
        input.replace(/L/g, "-").replace(/R/g, "").split('\n')
            .map(eval)
            .reduce((previousValue, currentValue) => {
                if (previousValue === 0) {
                    cnt++
                }
                return (previousValue + currentValue) % 100
            }, 50)
        return cnt
    }

    compute2(input: string): any {
        let cnt = 0;
        input.replace(/L/g, "-").replace(/R/g, "").split('\n')
            .map(eval)
            .reduce((previousValue, currentValue) => {
                let tmp = (currentValue + previousValue)
                cnt += Math.floor(Math.abs(tmp / 100))
                if ((previousValue > 0 && tmp < 0) || (previousValue < 0 && tmp > 0) || tmp === 0) {
                    cnt++
                }
                return tmp % 100
            }, 50)
        return cnt
    }

}