import {DaySolver} from "./DaySolver.ts";
import {D202401} from "./Days/2024/D202401.ts";
import {D202402} from "./Days/2024/D202402.ts";
import {D202403} from "./Days/2024/D202403.ts";
import {D202404} from "./Days/2024/D202404.ts";
import {D202405} from "./Days/2024/D202405.ts";
import {D202406} from "./Days/2024/D202406.ts";
import {D202407} from "./Days/2024/D202407.ts";
import {D202408} from "./Days/2024/D202408.ts";
import {D202409} from "./Days/2024/D202409.ts";
import {D202501} from "./Days/2025/D202501.ts";
import {D202502} from "./Days/2025/D202502.ts";
import {D202503} from "./Days/2025/D202503.ts";
import {D202504} from "./Days/2025/D202504.ts";
import {D202505} from "./Days/2025/D202505.ts";
import {D202506} from "./Days/2025/D202506.ts";
import {D202507} from "./Days/2025/D202507.ts";
import {D202508} from "./Days/2025/D202508.ts";
class DayFactory {
    create(date: Date): DaySolver|null {
        const dateStr = date.getFullYear() + "" + (date.getDate())
        switch (dateStr) {
            case "20241": return new D202401(date);
            case "20242": return new D202402(date);
            case "20243": return new D202403(date);
            case "20244": return new D202404(date);
            case "20245": return new D202405(date);
            case "20246": return new D202406(date);
            case "20247": return new D202407(date);
            case "20248": return new D202408(date);
            case "20249": return new D202409(date);


            case "20251": return new D202501(date);
            case "20252": return new D202502(date);
            case "20253": return new D202503(date);
            case "20254": return new D202504(date);
            case "20255": return new D202505(date);
            case "20256": return new D202506(date);
            case "20257": return new D202507(date);
            case "20258": return new D202508(date);
            // case "20259": return new D202509(date);
            default: return null
        }
    }
}

export const dayFactory: DayFactory = new DayFactory()