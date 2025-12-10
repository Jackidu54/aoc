import {DaySolver} from "../../DaySolver.ts";

export class D202510 extends DaySolver {
    compute1(input: string): any {
        class Node {
            constructor(public lightStatus: string) {
            }
        }

        let lights = input.split("\n").map(curr => curr.split('] ')[0].substring(1))
        let buttons = input.split("\n").map(curr => curr.split(' ').slice(1, -1).map(item => item.slice(1, -1).split(",").map(it => parseInt(it))))
        const nodeMap = new Map<string, Node>()

        let val = 0

        for (let i = 0; i < lights.length; i++) {
            const recursiveWalk = (start: Node[], depth: number) => {
                if ((start.some(node => node.lightStatus === lights[i]))) {
                    return depth
                } else {
                    start.forEach(node => nodeMap.set(node.lightStatus, node))
                    const newNodes = start.reduce((acc: Node[], node) => {
                        return [...acc,
                            ...buttons[i].map(button => {
                                let lights = node.lightStatus
                                button.forEach(index => {
                                    lights = lights.substring(0, index) + (lights[index] === "." ? '#' : '.') + lights.substring(index + 1);
                                })
                                if (!nodeMap.has(lights)) {
                                    return new Node(lights)
                                } else return null
                            }).filter(item => item !== null)
                        ]
                    }, [])
                    return recursiveWalk(newNodes.filter((item, idx) => idx === newNodes.findIndex(cmp => cmp.lightStatus === item?.lightStatus)), depth+1)
                }
            }
            nodeMap.clear()
            let currentNode = new Node(lights[i].replace(/./g, "."))
            val += recursiveWalk([currentNode], 0)
        }


        return val
    }

    compute2(input: string): any {
        return input
    }

}