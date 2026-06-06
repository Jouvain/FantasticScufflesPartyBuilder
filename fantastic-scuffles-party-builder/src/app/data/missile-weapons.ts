import { MissileWeaponDefinition } from "../models/missile-weapon-definition";

export const MISSILE_WEAPONS: MissileWeaponDefinition[]  = [
    {
        id: "Arquebus",
        name: "Arquebus",
        cost: 6,
        special: "Shots ignore blocks and armour. Require 1 Interact Action to reload after each shot.",
        shtModifier: -1,
        rtwModifier: 1,
        range: 16
    },
    {
        id: "Bow",
        name: "Bow",
        cost: 4,
        special: "",
        shtModifier: 1,
        rtwModifier: 0,
        range: 24
    }    
]