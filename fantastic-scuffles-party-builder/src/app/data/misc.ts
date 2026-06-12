import { MiscDefinition } from "../models/misc-definition";

export const MISC: MiscDefinition[] = [
    {
        id: "Balanced weapon",
        name: "Balanced weapon",
        cost: 3,
        special: "",
        kind: "weapon-enhancement",
        profileAdjustments: [
            { kind: "equipped-melee-attack", modifier: 1 }
        ]
    },
    {
        id: "Talisman",
        name: "Talisman",
        cost: 2,
        special: "",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "res", modifier: -1 }
        ]
    }    
]
