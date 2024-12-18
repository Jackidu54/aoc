import {DaySolver} from "./DaySolver.ts";
import {D01} from "./Days/2024/D01.ts";
import {D02} from "./Days/2024/D02.ts";
import {D03} from "./Days/2024/D03.ts";
import {D04} from "./Days/2024/D04.ts";
import {D05} from "./Days/2024/D05.ts";
import {D06} from "./Days/2024/D06.ts";
import {D07} from "./Days/2024/D07.ts";
class DayFactory {
    create(date: Date): DaySolver {
        const dateStr = date.getFullYear() + "" + (date.getDay()+1)
        switch (dateStr) {
            case "20241": return new D01(date);
            case "20242": return new D02(date);
            case "20243": return new D03(date);
            case "20244": return new D04(date);
            case "20245": return new D05(date);
            case "20246": return new D06(date);
            case "20247": return new D07(date);
            default: return new class extends DaySolver {
                compute2(input: string): string {
                    return input;
                }
                compute1(input: string): string {
                    return input;
                }
                get available() {
                    return false;
                }
            }(date)
        }
    }
}

export const dayFactory: DayFactory = new DayFactory()