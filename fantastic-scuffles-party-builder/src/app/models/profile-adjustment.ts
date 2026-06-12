// export interface ProfileAdjustment {
//     stat: string;
//     modifier: number;
// }

import { DirectStatAdjustment } from "../types/direct-stat-adjustement";
import { IndirectStatAdjustment } from "../types/indirect-stat-adjustment";

export type ProfileAdjustment = DirectStatAdjustment | IndirectStatAdjustment;