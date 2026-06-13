import { MiscDefinition } from "../models/misc-definition";

export const MISC: MiscDefinition[] = [
    {
        id: "Well balanced",
        name: "Well balanced",
        cost: 3,
        special: "",
        kind: "weapon-enhancement",
        profileAdjustments: [
            { kind: "equipped-melee-attack", modifier: 1 }
        ]
    },
    {
        id: "Balanced",
        name: "Balanced",
        cost: 3,
        special: "",
        kind: "missile-enhancement",
        profileAdjustments: [
            { kind: "direct-stat", stat: "sht", modifier: 1 }
        ]
    },
    {
        id: "Bandages",
        name: "Bandages",
        cost: 2,
        special: "Use 1 Interact Action to restore 1 Wnd to self of another model in contact",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Bodkin arrows",
        name: "Bodkin arrows",
        cost: 3,
        special: "+1 rtW for shots against armours",
        kind: "missile-enhancement",
        profileAdjustments: []
    },
    {
        id: "Cursed",
        name: "Cursed",
        cost: 5,
        special: "rolls 2D10 and apply higher for rtW ; For any dice scoring '1' the wielder suffers 1 Wnd",
        kind: "weapon-enhancement",
        profileAdjustments: []
    },
    {
        id: "Elixir",
        name: "Elixir",
        cost: 6,
        special: "1 Interact Action to restore  hald 1D10 Wnd to self or model in contact",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Familiar",
        name: "Familiar",
        cost: 4,
        special: "May reroll 2 or 3 on casting rolls",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Flaming",
        name: "Flaming",
        cost: 3,
        special: "If fail to wound on shot, reroll rtW",
        kind: "missile-enhancement",
        profileAdjustments: [
            { kind: "direct-stat", stat: "sht", modifier: -1 }
        ]
    },
    {
        id: "Burning",
        name: "Burning",
        cost: 4,
        special: "If fail to wound on attack, reroll rtW",
        kind: "weapon-enhancement",
        profileAdjustments: []
    },
    {
        id: "Glowstone",
        name: "Glowstone",
        cost: 10,
        special: "Light in 4'' as a handfree torch",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Lockpicks",
        name: "Lockpicks",
        cost: 3,
        special: "Roll 2D10 on thievery against locked chest/doors, apply the higher",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Mountable",
        name: "Mountable",
        cost: 4,
        special: "Can transport smaller models (same-sized if also a 'vehicule')",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Pet",
        name: "Pet",
        cost: 4,
        special: "Opponents gain no modifiers for attacking the model's rear",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "attH1", modifier: 1 },
            { kind: "direct-stat", stat: "attH2", modifier: 1 }
        ]
    },
    {
        id: "Poison",
        name: "Poison",
        cost: 4,
        special: "If inflict at least 1 Wnd on shot, inflict another Wnd",
        kind: "missile-enhancement",
        profileAdjustments: []
    }, {
        id: "Poisoned",
        name: "Poisoned",
        cost: 3,
        special: "If inflict at least 1 Wnd on attack, inflict another Wnd",
        kind: "weapon-enhancement",
        profileAdjustments: []
    },
        {
        id: "Renowned",
        name: "Renowned",
        cost: 6,
        special: "May reroll attack's rtW",
        kind: "weapon-enhancement",
        profileAdjustments: []
    },
    {
        id: "Renowned armour",
        name: "Renowned armour",
        cost: 15,
        special: "Opponents roll 2D10 for rtW, apply the lower - do not apply against Cursed weapon",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Renowned shield",
        name: "Renowned shield",
        cost: 9,
        special: "Opponents must reroll frontal shots and attacks if successfull",
        kind: "weapon-enhancement",
        profileAdjustments: []
    },
    {
        id: "Rope and hook",
        name: "Rope and hook",
        cost: 2,
        special: "Roll 2D10 on climbing, apply higher",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Smoke bombs",
        name: "Smoke bombs",
        cost: 4,
        special: "1 Interact Action to fuse a bomb EITHER to move out contact without triggering opportunity attacks OR remain stationary with +2 dva, +4 dvs for the current turn",
        kind: "standalone",
        profileAdjustments: []
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
    },
    {
        id: "Mount",
        name: "Mount",
        cost: 5,
        special: "bolt randomly for half 1D10 if suffers at least 2 Wnd on same rtW ; +1 rtW on Attacks",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 2 },
            { kind: "direct-stat", stat: "sht", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 2 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
        ]
    },
    {
        id: "Mount (amphibious)",
        name: "Mount (amphibious)",
        cost: 4,
        special: "bolt randomly for half 1D10 if suffers at least 2 Wnd on same rtW ; no mov/att modifer on water features ; +1dva/dvs if wholly within water feature",
        kind: "standalone",
        profileAdjustments: []
    },
    {
        id: "Mount (flying)",
        name: "Mount (flying)",
        cost: 7,
        special: "bolt randomly for 1D10 if suffers at least 2 Wnd on same rtW ; ignore mov modifiers, even impassable features",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 4 },
            { kind: "direct-stat", stat: "sht", modifier: -2 },
            { kind: "direct-stat", stat: "dva", modifier: -2 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
            { kind: "direct-stat", stat: "attH1", modifier: 1 },
            { kind: "direct-stat", stat: "attH2", modifier: 1 },
        ]
    },
    {
        id: "Mount (fierce)",
        name: "Mount (fierce)",
        cost: 7,
        special: "bolt randomly for half 1D10 if suffers at least 2 Wnd on same rtW ; +1 rtW on Attacks",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 2 },
            { kind: "direct-stat", stat: "sht", modifier: -1 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
            { kind: "direct-stat", stat: "attH1", modifier: 1 },
            { kind: "direct-stat", stat: "attH2", modifier: 1 },
            { kind: "direct-stat", stat: "wnd", modifier: 1 },
        ]
    },
    {
        id: "Mount (placid)",
        name: "Mount (placid)",
        cost: 3,
        special: "",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 2 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
            { kind: "direct-stat", stat: "dva", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 1 },
        ]
    },
    {
        id: "Mount (piggyback)",
        name: "Mount (piggyback)",
        cost: 2,
        special: "+1 rtw on Attacks",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 2 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 1 },
        ]
    },
    {
        id: "Mount (scuttling)",
        name: "Mount (scuttling)",
        cost: 6,
        special: "bolt randomly for half 1D10 if suffers at least 2 Wnd on same rtW ; +1 to climbing rolls",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 1 },
            { kind: "direct-stat", stat: "dvs", modifier: 1 },
            { kind: "direct-stat", stat: "wnd", modifier: 1 },
        ]
    },
    {
        id: "vehicule",
        name: "vehicule",
        cost: 8,
        special: "-1 rtW to opponents",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 1 },
            { kind: "direct-stat", stat: "dva", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 2 },            
            { kind: "direct-stat", stat: "res", modifier: -1 },            
        ]
    },
    {
        id: "vehicule (light)",
        name: "vehicule (light)",
        cost: 8,
        special: "Can turn up to 90° beafore each Move Action",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "mov", modifier: 2 },
            { kind: "direct-stat", stat: "dvs", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 1 },                      
        ]
    },
    {
        id: "vehicule (sturdy)",
        name: "vehicule (sturdy)",
        cost: 8,
        special: "-2 rtW to opponents",
        kind: "standalone",
        profileAdjustments: [
            { kind: "direct-stat", stat: "dvs", modifier: 1 },
            { kind: "direct-stat", stat: "dva", modifier: -1 },
            { kind: "direct-stat", stat: "wnd", modifier: 2 },            
            { kind: "direct-stat", stat: "res", modifier: -1 },            
        ]
    }
]
