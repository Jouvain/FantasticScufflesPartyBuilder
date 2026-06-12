import { MissileWeaponDefinition } from "../models/missile-weapon-definition";

export const MISSILE_WEAPONS: MissileWeaponDefinition[] = [
    {
        id: "No missile",
        name: "No missile",
        cost: 0,
        special: "",
        shtModifier: 0,
        rtwModifier: 0,
        range: 0
    },
    {
        id: "Blunderbuss",
        name: "Blunderbuss",
        cost: 4,
        special: "if target hit, ths shot also hits all models in base contact ; Require 1 Interact Action to reload after each shot",
        shtModifier: 1,
        rtwModifier: 0,
        range: 24
    },
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
        id: "Hand cannon",
        name: "Hand cannon",
        cost: 7,
        special: "Shots ignore blocks and armour ; Require 2 Interact Action to reload after each shot",
        shtModifier: -2,
        rtwModifier: 3,
        range: 16
    },
    {
        id: "Pistol",
        name: "Pistol",
        cost: 4,
        special: "Shots ignore blocks and armour. Require 1 Interact Action to reload after each shot.",
        shtModifier: 0,
        rtwModifier: 1,
        range: 6
    },
    {
        id: "Pistol brace",
        name: "Pistol brace",
        cost: 7,
        special: "Shots ignore blocks and armour. May shoot twice in the same activation. Require 1 Interact Action to reload after each shot.",
        shtModifier: 0,
        rtwModifier: 1,
        range: 6
    },
    {
        id: "Blowpipe",
        name: "Blowpipe",
        cost: 2,
        special: "A target hit and wounded suffers +1 additional Wound",
        shtModifier: 0,
        rtwModifier: -1,
        range: 6
    },
    {
        id: "Short bow",
        name: "Short bow",
        cost: 4,
        special: "May shoot twice in the same activation",
        shtModifier: 0,
        rtwModifier: -1,
        range: 16
    },
    {
        id: "Long bow",
        name: "Long bow",
        cost: 6,
        special: "May not concentrate before shooting",
        shtModifier: 0,
        rtwModifier: 1,
        range: 32
    },
    {
        id: "Bow",
        name: "Bow",
        cost: 4,
        special: "",
        shtModifier: 1,
        rtwModifier: 0,
        range: 24
    },
    {
        id: "Crossbow",
        name: "Crossbow",
        cost: 5,
        special: "Require 1 Interact Action to reload after each shot.",
        shtModifier: 0,
        rtwModifier: 2,
        range: 24
    },
    {
        id: "Crossbow pistol",
        name: "Crossbow pistol",
        cost: 3,
        special: "",
        shtModifier: 1,
        rtwModifier: -1,
        range: 6
    },
    {
        id: "Crossbow pistol brace",
        name: "Crossbow pistol brace",
        cost: 5,
        special: "May shoot twice in the same activation",
        shtModifier: 1,
        rtwModifier: -1,
        range: 6
    },
    {
        id: "Grenades",
        name: "Grenades",
        cost: 4,
        special: "Require 1 Interact Action before being thrown in the next available Action. If hit before, the grenade drop and explode at their feet. Hit all models within 2''. If misses, deviates randomly half 1D10",
        shtModifier: -1,
        rtwModifier: 2,
        range: 6
    },
    {
        id: "Javelins",
        name: "Javelins",
        cost: 2,
        special: "If thrown immediatly after a move of at least 1'' toward target, ignore negative Sht modifier and +1 rtW",
        shtModifier: 0,
        rtwModifier: 0,
        range: 8
    },
    {
        id: "Net",
        name: "Net",
        cost: 4,
        special: "One-use. No rtW on hit, instead : target suffers -2 mov, dva and dvs and -4 on all rolls ; target and other ennemies can break the net for 2 Interact Action",
        shtModifier: 0,
        rtwModifier: 0,
        range: 4
    },
    {
        id: "Sling",
        name: "Sling",
        cost: 2,
        special: "May shoot twice in the same activation ; if concentrated shooting, sling range = 20'' and no rtW modifier",
        shtModifier: 0,
        rtwModifier: -1,
        range: 10
    },
    {
        id: "Throwing axe/spear",
        name: "Throwing axe/spear",
        cost: 4,
        special: "One-use",
        shtModifier: 1,
        rtwModifier: 3,
        range: 6
    },
    {
        id: "Throwing knives",
        name: "Throwing knives",
        cost: 2,
        special: "May shoot twice in the same activation",
        shtModifier: 1,
        rtwModifier: 0,
        range: 4
    }
]