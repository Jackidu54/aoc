export abstract class DaySolver {
    date = new Date()

    constructor(date: Date) {
        this.date = date
    }

    async fetch(): Promise<string> {
        let response = await fetch(
            "input/" + this.date.getFullYear() + "/day/" + (this.date.getDate()) + "/input"
        );
        let str = await response.text();
        return str.trimEnd();
    }

    abstract compute1(input: string): any;
    abstract compute2(input: string): any;
}