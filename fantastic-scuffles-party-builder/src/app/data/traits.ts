import { TraitDefinition } from "../models/traits-definition";
import { Trait } from "../types/trait-type";

export const TRAITS: Trait[] = [
    {
        id: 1,
        name: "Agile",
        special: "+2 to climbing rolls, may not carry shield nor armour",
        cost: +2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {stat: "dva", modifier: 1},
            {stat: "dvs", modifier: 1}
        ]
    },
    {
        id: 2,
        name: "Bless",
        special: "the target gains +5 to their next die roll",
        cost: +4,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12
    }    
    
]