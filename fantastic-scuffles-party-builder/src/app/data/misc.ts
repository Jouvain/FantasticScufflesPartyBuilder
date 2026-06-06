import { MiscDefinition } from "../models/misc-definition";

export const MISC: MiscDefinition[] = [
    {
        id: "Balanced weapon",
        name: "Balanced weapon",
        cost: 3,
        special: "",
        isWeaponEnhancement: true,
        profileAdjustment: [
            {stat:"att", modifier: 1}
        ]
    },
    {
        id: "Talisman",
        name: "Talisman",
        cost: 2,
        special: "",
        isWeaponEnhancement: false,
        profileAdjustment: [
            {stat:"Res", modifier: -1}
        ]
    }    
]