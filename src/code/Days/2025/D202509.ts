import {DaySolver} from "../../DaySolver.ts";

export class D202509 extends DaySolver {
    compute1(input: string): any {
        const pos = input.split("\n").map(line => line.split(",").map(i => parseInt(i))).map(line => ({
            x: line[0],
            y: line[1]
        }))

        const area = pos.reduce((acc: number[][], curr, y) => [...acc, pos.map((point, x) =>
            x >= y ? 0 : (Math.abs(curr.x - point.x) + 1) * (Math.abs(curr.y - point.y) + 1))
        ], [])
        return area.flat().sort((a, b) => b - a)[0]
    }

    compute2(input: string): any {
        class Point {
            constructor(
                public x: number,
                public y: number
            ) {
            }

            equal(p: Point) {
                return this.x === p.x && this.y === p.y
            }
        }

        class Segment {
            _dir: "v" | "h"

            constructor(
                public pointL: Point,
                public pointR: Point,
            ) {
                this._dir = this.pointR.x === this.pointL.x ? "v" : "h"
            }

            get dir(): "v" | "h" {
                return this._dir
            }
        }

        const pos = input.split("\n").map(line => line.split(",").map(i => parseInt(i))).map(line => new Point(line[0], line[1]))

        const area = pos.reduce((acc: {
            pointL: Point,
            pointR: Point,
            area: number
        }[], curr) => [...acc,
            ...pos.map((point) =>
                ({
                    pointL: point,
                    pointR: curr,
                    area: (Math.abs(curr.x - point.x) + 1) * (Math.abs(curr.y - point.y) + 1)
                }))
        ], []).filter(item => item.pointL.x < item.pointR.x).sort((a, b) => b.area - a.area)

        //liste des cotés du polygones
        const cotes: Segment[] = pos.map((item, index) => index === 0 ?
            new Segment(pos[pos.length - 1], item) :
            new Segment(pos[index - 1], item))

        const haveIntersection = (cotePoly: Segment, coteRectangle: Segment) => {
            if (cotePoly.dir === coteRectangle.dir){
                return false
            }
            if (cotePoly.dir === "v") {
                if (Math.min(cotePoly.pointL.x, coteRectangle.pointL.x, coteRectangle.pointR.x) === cotePoly.pointL.x ||
                    Math.max(cotePoly.pointL.x, coteRectangle.pointL.x, coteRectangle.pointR.x) === cotePoly.pointL.x ||
                    Math.min(coteRectangle.pointL.y, cotePoly.pointL.y, cotePoly.pointR.y) === coteRectangle.pointL.y ||
                    Math.max(coteRectangle.pointL.y, cotePoly.pointL.y, cotePoly.pointR.y) === coteRectangle.pointL.y
                ) {
                    return false
                }
            } else {
                if (Math.min(coteRectangle.pointL.x, cotePoly.pointL.x, cotePoly.pointR.x) === coteRectangle.pointL.x ||
                    Math.max(coteRectangle.pointL.x, cotePoly.pointL.x, cotePoly.pointR.x) === coteRectangle.pointL.x ||
                    Math.min(cotePoly.pointL.y, coteRectangle.pointL.y, coteRectangle.pointR.y) === cotePoly.pointL.y ||
                    Math.max(cotePoly.pointL.y, coteRectangle.pointL.y, coteRectangle.pointR.y) === cotePoly.pointL.y
                ) {
                    return false
                }
            }
            return true
        }

        const  inside = (point: Point, vs: Point[]) => {
            if (vs.find(p => p.equal(point)))
                return true
            let x = point.x, y = point.y;

            let inside = false;
            for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                let xi = vs[i].x, yi = vs[i].y;
                let xj = vs[j].x, yj = vs[j].y;

                let intersect = ((yi > y) != (yj > y))
                    && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }

            return inside;
        };

        return area.find(rectangle => {
            return cotes.reduce((acc, curr) => acc && !(
                haveIntersection(curr, new Segment(new Point(rectangle.pointL.x, rectangle.pointL.y), new Point(rectangle.pointL.x, rectangle.pointR.y))) ||
                haveIntersection(curr, new Segment(new Point(rectangle.pointL.x, rectangle.pointR.y), new Point(rectangle.pointR.x, rectangle.pointR.y))) ||
                haveIntersection(curr, new Segment(new Point(rectangle.pointR.x, rectangle.pointR.y), new Point(rectangle.pointR.x, rectangle.pointL.y))) ||
                haveIntersection(curr, new Segment(new Point(rectangle.pointR.x, rectangle.pointL.y), new Point(rectangle.pointL.x, rectangle.pointL.y)))
            ) && (
                inside(new Point(rectangle.pointL.x, rectangle.pointL.y), pos) &&
                inside(new Point(rectangle.pointR.x, rectangle.pointL.y), pos) &&
                inside(new Point(rectangle.pointL.x, rectangle.pointR.y), pos) &&
                inside(new Point(rectangle.pointR.x, rectangle.pointR.y), pos)
                ), true)
        })!.area

    }

}