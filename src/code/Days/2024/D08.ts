import {DaySolver} from "../../DaySolver.ts";

export class D08 extends DaySolver {
    compute1(input: string): any {
        const map = input.split('\n')
            .map((line) => line.split(''))
            .reduce((acc, line, y) => {
                line.forEach((char, x) => {
                    if (char !== '.') {
                        acc.set(char, (acc.get(char) ?? []).concat({x, y}))
                    }
                })
                return acc
            }, new Map<string, any[]>)
        const knownPos: any[] = []
        map.forEach((v) => this.generatePairs(v).forEach(pair => knownPos.push(
            {x: (2 * pair[0].x - pair[1].x), y: (2 * pair[0].y - pair[1].y)},
            {x: (2 * pair[1].x - pair[0].x), y: (2 * pair[1].y - pair[0].y)},
        )))
        return Array.from(new Set(knownPos.filter(i => i.x >= 0 && i.y >= 0 && i.x < input.split('\n')[0].length && i.y < input.split('\n').length)
            .map(i => i.x + "," + i.y))).length + "";

    }

    compute2(input: string): any {
        const map = input.split('\n')
        .map((line) => line.split(''))
        .reduce((acc, line, y) => {
            line.forEach((char, x) => {
                if (char !== '.') {
                    acc.set(char, (acc.get(char) ?? []).concat({x, y}))
                }
            })
            return acc
        }, new Map<string, any[]>)
        const knownPos: any[] = []
        map.forEach((v) => this.generatePairs(v).forEach(pair => this.getAlignedPoints(pair[0], pair[1], input.split('\n')[0].length, input.split('\n').length).forEach(point => knownPos.push(point))))
        return Array.from(new Set(knownPos.filter(i => i.x >= 0 && i.y >= 0 && i.x < input.split('\n')[0].length && i.y < input.split('\n').length)
            .map(i => i.x + "," + i.y))).length + "";
    }

    generatePairs<T>(array: T[]): [T, T][] {
        const pairs: [T, T][] = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                pairs.push([array[i], array[j]]);
            }
        }
        return pairs;
    }

    getAlignedPoints(p1: any, p2: any, width: number, height: number): any[] {
        const points: any[] = [];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
        const step = gcd(Math.abs(dx), Math.abs(dy));

        const stepX = dx / step;
        const stepY = dy / step;

        let x = p1.x;
        let y = p1.y;

        while (x >= 0 && x < width && y >= 0 && y < height) {
            points.push({ x, y });
            x += stepX;
            y += stepY;
        }

        x = p1.x - stepX;
        y = p1.y - stepY;

        while (x >= 0 && x < width && y >= 0 && y < height) {
            points.push({ x, y });
            x -= stepX;
            y -= stepY;
        }

        return points;
    }

}