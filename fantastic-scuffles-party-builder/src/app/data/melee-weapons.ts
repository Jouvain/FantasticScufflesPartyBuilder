import { MeleeWeaponDefinition } from "../models/melee-weapon-definition";

export const MELEE_WEAPONS: MeleeWeaponDefinition[] = [
    {
        id: "No weapon",
        name: "No weapon",
        cost: 0,
        special: "",
        attModifier: -1,
        rtwModifier: -1,
        grip: "single"
    },
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
    },
    {
        id: "Improvised weapon",
        name: "Improvised weapon",
        cost: 1,
        special: "",
        attModifier: 0,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Flail",
        name: "Flail",
        cost: 4,
        special: "May not carry out opportunity attack and opponent can't block",
        attModifier: -1,
        rtwModifier: 2,
        grip: "single"
    },
    {
        id: "Mace",
        name: "Mace",
        cost: 2,
        special: "Ignore light and medium armour",
        attModifier: 0,
        rtwModifier: 1,
        grip: "single"
    },
    {
        id: "Maul",
        name: "Maul",
        cost: 4,
        special: "May not carry out opportunity attack",
        attModifier: 0,
        rtwModifier: 3,
        grip: "double"
    },
    {
        id: "Polearm",
        name: "Axe",
        cost: 5,
        special: "Ignore armour",
        attModifier: 0,
        rtwModifier: 1,
        grip: "double"
    },
    {
        id: "Small shield",
        name: "Small shield",
        cost: 2,
        special: "Block +2 ; -1 to casting rolls",
        attModifier: -2,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Shield",
        name: "Shield",
        cost: 4,
        special: "Block +3 ; -2 to casting rolls",
        attModifier: -3,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Spear",
        name: "Spear",
        cost: 3,
        special: "On foot : make opportunity before a charging ennemy ; Mounted : =1 rtW when charging",
        attModifier: 1,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Staff",
        name: "Staff",
        cost: 1,
        special: "Block + 1 VS melee",
        attModifier: 0,
        rtwModifier: 0,
        grip: "double"
    },
    {
        id: "Standard",
        name: "Standard",
        cost: 4,
        special: "Friens failing Resolve move towards the standard ; if killed all friends must Resolve",
        attModifier: -5,
        rtwModifier: 0,
        grip: "double"
    },
    {
        id: "Short sword",
        name: "Short sword",
        cost: 2,
        special: "",
        attModifier: 1,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Long sword",
        name: "Long sword",
        cost: 6,
        special: "Do not suffers normal -1 on opportunity attack",
        attModifier: 2,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Bastard sword",
        name: "Bastard sword",
        cost: 7,
        special: "Do not suffers normal -1 on opportunity attack ; +1 rtW if other hand empty",
        attModifier: 2,
        rtwModifier: 0,
        grip: "single"
    },
    {
        id: "Great sword",
        name: "Great sword",
        cost: 4,
        special: "Additional -1 Att when carrying out opportunity attacks",
        attModifier: 1,
        rtwModifier: 1,
        grip: "double"
    },
    {
        id: "Teeth and claws",
        name: "Teeth and claws",
        cost: 2,
        special: "can't use missile weapons nor thievery action",
        attModifier: 1,
        rtwModifier: 0,
        grip: "double"
    },
    {
        id: "Torch",
        name: "Torch",
        cost: 1,
        special: "Treat dark areas within 4'' as light ; if fail to wound, reroll the rtW",
        attModifier: -1,
        rtwModifier: -1,
        grip: "single"
    },
    {
        id: "Wand and casting hand",
        name: "Wand and casting hand",
        cost: 1,
        special: "+1 to casting rolls",
        attModifier: -1,
        rtwModifier: -1,
        grip: "double"
    }
]