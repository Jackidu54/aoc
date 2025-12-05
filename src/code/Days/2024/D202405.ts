import {DaySolver} from "../../DaySolver.ts";

export class D202405 extends DaySolver {
    compute1(input: string): any {
        const map = new Map<string, string[]>();
        input.split('\n\n')[0]
            .split('\n')
            .map((line: string) => line
                .split("|")
                .forEach(item => map.set(item, [...(map.get(item) ?? []), line])))
        return "" + input.split('\n\n')[1].split('\n')
            .filter((line: string) =>
                !line.split(',')
                    .some(item => map.get(item)?.some(line2 =>
                        line.match("^(?:(?!" + line2.split("|")[0] + ").)*" + line2.split("|")[1] + "(?:(?!" + line2.split("|")[1] + ").)*" + line2.split("|")[0] + ""))))
            .map((item) => parseInt(item.split(',')[(item.split(',').length - 1) / 2]))
            .reduce((acc, val) => acc + val, 0)
    }


    compute2(input: string): any {
        const map = new Map<string, string[]>();
        input.split('\n\n')[0]
            .split('\n')
            .map((line: string) => line
                .split("|")
                .forEach(item => map.set(item, [...(map.get(item) ?? []), line])))
        return "" + input.split('\n\n')[1].split('\n')
            .filter((line: string) =>
                line.split(',')
                    .some(item => map.get(item)?.some(line2 =>
                        line.match("^(?:(?!" + line2.split("|")[0] + ").)*" + line2.split("|")[1] + "(?:(?!" + line2.split("|")[1] + ").)*" + line2.split("|")[0] + ""))))
            .map(line => ({
                line,
                predicateSorted: this.topologicalSort(
                    input.split('\n\n')[0]
                        .split('\n')
                        .filter(item => item.split("|").every(subItem => line.split(',').includes(subItem)))
                )
            }))
            .map(obj =>
                obj.line.split(',').sort((a, b) => obj.predicateSorted.indexOf(parseInt(a)) -
                    obj.predicateSorted.indexOf(parseInt(b)))
            )
            .map((item) => parseInt(item[(item.length - 1) / 2]))
            .reduce((acc, val) => acc + val, 0)
    }

    topologicalSort(predicates: string[]): number[] {
        const graph = new Map<number, number[]>(), inDegree = new Map<number, number>();
        predicates.forEach(predicate => {
            const [left, right] = predicate.split('|').map(Number);
            graph.set(left, [...(graph.get(left) || []), right]);
            inDegree.set(right, (inDegree.get(right) || 0) + 1);
            inDegree.set(left, inDegree.get(left) || 0);
        });
        const queue = [...inDegree.entries()].filter(([_, degree]) => degree === 0).map(([node]) => node),
            result: number[] = [];
        while (queue.length) {
            const node = queue.shift()!;
            result.push(node);
            (graph.get(node) || []).forEach(neighbor => {
                inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
                if (inDegree.get(neighbor) === 0) queue.push(neighbor);
            });
        }
        return result;
    }
}