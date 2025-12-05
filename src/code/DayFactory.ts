import {DaySolver} from "./DaySolver.ts";
import {D01} from "./Days/2024/D01.ts";
import {D02} from "./Days/2024/D02.ts";
import {D03} from "./Days/2024/D03.ts";
import {D04} from "./Days/2024/D04.ts";
import {D05} from "./Days/2024/D05.ts";
import {D06} from "./Days/2024/D06.ts";
import {D07} from "./Days/2024/D07.ts";
import {D08} from "./Days/2024/D08.ts";
import {D09} from "./Days/2024/D09.ts";
import {D202501} from "./Days/2025/D202501.ts";
import {D202502} from "./Days/2025/D202502.ts";
import {D202503} from "./Days/2025/D202503.ts";
import {D202504} from "./Days/2025/D202504.ts";
import {D202505} from "./Days/2025/D202505.ts";
class DayFactory {
    create(date: Date): DaySolver|null {
        const dateStr = date.getFullYear() + "" + (date.getDate())
        switch (dateStr) {
            case "20241": return new D01(date);
            case "20242": return new D02(date);
            case "20243": return new D03(date);
            case "20244": return new D04(date);
            case "20245": return new D05(date);
            case "20246": return new D06(date);
            case "20247": return new D07(date);
            case "20248": return new D08(date);
            case "20249": return new D09(date);


            case "20251": return new D202501(date);
            case "20252": return new D202502(date);
            case "20253": return new D202503(date);
            case "20254": return new D202504(date);
            case "20255": return new D202505(date);
            // case "20256": return new D202506(date);
            // case "20257": return new D202507(date);
            // case "20258": return new D202508(date);
            // case "20259": return new D202509(date);
            default: return null
        }
    }
}

export const dayFactory: DayFactory = new DayFactory()