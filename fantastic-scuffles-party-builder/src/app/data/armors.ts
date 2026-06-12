import { ArmorDefinition } from "../models/armor-definition";

export const ARMORS: ArmorDefinition[] = [
    {
        id: "No armour",
        name: "No armour",
        cost: 0,
        special: "",
        dvaModifier: 0,
        dvsModifier: 0
    },
    {
        id: "Light armour",
        name: "Light armour",
        cost: 3,
        special: "- 1 rtW when hit, -1 to casting rolls.",
        dvaModifier: 0,
        dvsModifier: 0
    },
    {
        id: "Medium armour",
        name: "Medium armour",
        cost: 6,
        special: "- 2 rtW when hit, -2 to casting rolls, -1 to climbings roll, -1'' for moving through rough terrain.",
        dvaModifier: 0,
        dvsModifier: 0
    },    
    {
        id: "Heavy armour",
        name: "Heavy armour",
        cost: 9,
        special: "- 3 rtW when hit, -3 to casting rolls, -2 to climbings roll, -2'' for moving through rough terrain.",
        dvaModifier: -1,
        dvsModifier: -2
    }
]