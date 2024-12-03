export abstract class DaySolver {
    date = new Date()

    constructor(date: Date) {
        this.date = date
    }

    fetch(): Promise<string> {
        return fetch(
            "input/" + this.date.getFullYear() + "/day/" + (this.date.getDay() + 1) + "/input"
        ).then(response => response.text().then(str => str.trimEnd())
        )
    }

    get available() {
        return true
    }

    abstract compute1(input: string): string;
    abstract compute2(input: string): string;
}