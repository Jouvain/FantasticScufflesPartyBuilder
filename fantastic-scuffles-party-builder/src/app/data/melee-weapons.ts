import { MeleeWeaponDefinition } from "../models/melee-weapon-definition";

export const MELEE_WEAPONS: MeleeWeaponDefinition[] = [
    {
        id: "Axe",
        name: "Axe",
        cost: 3,
        special: "",
        attModifier: 1,
        rtwModifier: 1,
        grip: "single"
    },
    {
        id: "Great axe",
        name: "Great axe",
        cost: 5,
        special: "Additional -1 Att when carrying out opportunity attacks",
        attModifier: 0,
        rtwModifier: 2,
        grip: "double"
    }
]