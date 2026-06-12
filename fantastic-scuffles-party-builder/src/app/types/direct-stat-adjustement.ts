import { StatName } from "../models/stat-block"

export type DirectStatAdjustment = {
    kind: "direct-stat";
    stat: StatName;
    modifier: number;
}