import { Trait } from "../types/trait-type";

export const TRAITS: Trait[] = [
    {
        id: 1,
        name: "Agile",
        special: "+2 to climbing rolls, may not carry shield nor armour",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "dvs",
                modifier: 1
            }
        ]
    },
    {
        id: 2,
        name: "Amphibious",
        special: "No malus on water feature ; +1 DvA/DvS if wholly within a water feature",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 3,
        name: "Aquatic",
        special: "No malus on water feature ; +1 DvA/DvS if wholly within a water feature ; can be deployed in any water feature (outside opponent's deployment zone) ; treat non-water as difficult terrain",
        cost: 0,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 4,
        name: "Attuned",
        special: "On a successful 'Bilious Blast', 'Fireball', or 'Freeze', inflict 1 additional Wound ; on a successful 'Push' target is pushed +2''  ",
        cost: 2,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 5,
        name: "Backstab",
        special: "+2 Att/Sht when targeting ennemy's rear",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 6,
        name: "Belligerent",
        special: "+1 Att when chargin instead of -1 ; can't move out or attack another model while the attacked model isn't taken out of action",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 7,
        name: "Berserk",
        special: "can't concentrate ; if attack land a hit and wound on his turn, gain another attack with -1 Att ; no malus for opportunity attacks against self",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: -1
            },
        ]
    },
    {
        id: 8,
        name: "Bloodless",
        special: "-1 rtW againt self ; immune to 'poison' and 'Bilious Blast'",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 9,
        name: "Brawny",
        special: "May carry same-size objects without being 'encumbered' ; +1 rtW for Attacks",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 1
            },
        ]
    },
    {
        id: 10,
        name: "Bully",
        special: "+1 Att againts smaller opponents",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 11,
        name: "Commanding",
        special: "Once per turn, can use Interact Action to enable up to 3 minions within 6'' to carry out 1 Action",
        cost: 3,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 12,
        name: "Distracting",
        special: "Use Interact Action to distract all ennemies within 6'' and in LoS. Distracted models suffers -2 to all rolls (except rtW) for the turn",
        cost: 5,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "sht",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: -1
            },
        ]
    },
    {
        id: 13,
        name: "Doughty",
        special: "",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "res",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 1
            },
        ]
    },
    {
        id: 14,
        name: "Emerge",
        special: "During deployement, the player must state wich turn the 'emerging' model wil reveal itself (the activation token isn't added until then). This first Activation must be to emerge in any location at least 2'' away from ennemy.",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 15,
        name: "Ephemeral",
        special: "Ignore all terrain Mov modifiers (but can't pass through impassable)",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "dvs",
                modifier: 4
            },
        ]
    },
    {
        id: 16,
        name: "Erudite",
        special: "+1 to casting rolls",
        cost: 3,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: -1
            },
        ]
    },
    {
        id: 17,
        name: "Evasive",
        special: "Must move 1D5 directly away of the first charging ennemy of the turn, still facing the foe",
        cost: 0,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "res",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 1
            }
        ]
    },
    {
        id: 18,
        name: "Fast",
        special: "",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: 2
            }
        ]
    },
    {
        id: 19,
        name: "Feast",
        special: "Can use Interact Action to feed on a fallen ennemy, recovering 1 Wound (must remains stationary, possible until the end of the following turn)",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 20,
        name: "Feeble",
        special: "",
        cost: -3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "sht",
                modifier: -1
            }
        ]
    },
    {
        id: 21,
        name: "Flying",
        special: "Ignore all Mov terrain modifiers",
        cost: 12,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: 4
            }
        ]
    },
    {
        id: 22,
        name: "Frenzy",
        special: "+1 Att for each Wound",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 23,
        name: "Giant slayer",
        special: "+1 Att against larger ennemies",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 24,
        name: "Heroic",
        special: "Can act twice when Activated with the wildcard token",
        cost: 12,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 1
            }
        ]
    },
    {
        id: 25,
        name: "Highlander",
        special: "+1 Att when wholly within hill or rough terrain",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 26,
        name: "Holy order",
        special: "Ignore casting malus for armour and shield",
        cost: 5,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 1
            }
        ]
    },
    {
        id: 27,
        name: "Hunter",
        special: "Ignore Sht malus for moving and shooting the same turn",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 28,
        name: "Impulsive",
        special: "If not in contact, must move 1D5-1 toward the nearest ennemy and charge him after the Move",
        cost: 1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 29,
        name: "Incorporeal",
        special: "Ignore all terrain and melee modifiers ; can pass through impassable terrain ; may not carry out nor suffers thievery, shots and attacks (except 'renowned' and 'cursed' ones)",
        cost: 9,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: -2
            }
        ]
    },
    {
        id: 30,
        name: "Intimidate",
        special: "May use an Interact Action to cause all ennemies within 2'' to Resolve",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 31,
        name: "Light touch",
        special: "+2 on thievery rolls",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 32,
        name: "Lucky",
        special: "Ignore the first rtW roll that should be fatal",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 33,
        name: "Malodorous",
        special: "-1 Att to all models within 2'', -2 if Mounted ; ignore other 'Malodorous'",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 34,
        name: "Mindless",
        special: "Unless within 6'' of a non-mindless friend, only 1 Action par Activation ; never fail Resolve ; 2 Actions for thievery",
        cost: 0,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "sht",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: -1
            }
        ]
    },
    {
        id: 35,
        name: "Nocturnal",
        special: "Ignore darkness penalties ; if at least 50% of party is 'nocturnal', may apply -1 or -2 to environmental roll",
        cost: 0,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "sht",
                modifier: -1
            }
        ]
    },
    {
        id: 36,
        name: "Opportunistic",
        special: "+1 Att for opportunity's attacks",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 37,
        name: "Proud",
        special: "Ignore Resolve rolls for a killed part member",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 38,
        name: "Reckless",
        special: "",
        cost: 0,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: -2
            },
            {
                kind: "direct-stat",
                stat: "dvs",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 1
            }
        ]
    },
    {
        id: 39,
        name: "Regenerate",
        special: "May use 1 Interact Action to try to regenerate : 1D10 for each Wound, each 8+ restore one",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 40,
        name: "Resolute",
        special: "Ignore Wound modifier for Resolve rolls",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 41,
        name: "Robust",
        special: "-1 rtW to opponents",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: 1
            }
        ]
    },
    {
        id: 42,
        name: "Sadistic",
        special: "+1 Att while in contact with a wounded ennemy",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 43,
        name: "Sacrifice",
        special: "May use an Interact Action to kill a friend in contact for granting a critical succes in casting Roll in the same Activation OR te be eaten if also have 'Feast'",
        cost: 2,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 44,
        name: "Scavenger",
        special: "May reroll loot roll during campaign encounter",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 45,
        name: "Scion",
        special: "Roll 1D10 at the start on the game. The scion is hated/ignored/loved by NPC : 1-2 = hated - opponents may choose +/-1 on NPC Activation roll ; 3-6 = nothing ; 7+ = loved - can choose +/-1 on NPV Activation rolls",
        cost: 1,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 46,
        name: "Shieldwall",
        special: "If has a shield and in contact with a shielded friend also with 'Shieldwall', +1 DvA/DvS on front",
        cost: 1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 47,
        name: "Skilled Fighter",
        special: "",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 1
            }
        ]
    },
    {
        id: 48,
        name: "Skilled Marksman",
        special: "",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "sht",
                modifier: 1
            }
        ]
    },
    {
        id: 49,
        name: "Slow",
        special: "",
        cost: -1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "mov",
                modifier: -1
            }
        ]
    },
    {
        id: 50,
        name: "Snapshot",
        special: "Can shoot at charging/contacting ennemy with -1 Sht IF non already in contact",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 51,
        name: "Social",
        special: "+1 to Resolve rolls for each friend within 2''",
        cost: 1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "res",
                modifier: 1
            }
        ]
    },
    {
        id: 52,
        name: "Spikey",
        special: "May carry out opportunity attack for each hit suffered",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 53,
        name: "Steady Aim",
        special: "+1 Sht IF not moving the same turn",
        cost: 1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 54,
        name: "Stealthy",
        special: "+2 DvS IF in base contact with any terrain feature ; +2 DvA IF also in the dark",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 55,
        name: "Stimulants",
        special: "At start, roll 1D10 for effect : 1 = -1 to rolls ; 2 = -1 Att ; 3 = -1 Mov ; 4-5 = no effect ; 6 = ignore first wound ; 7 = +1 Mov = 8 = + Att ; 9 = +1 to Resolve ; 10 = -1rtW to ennemies",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 56,
        name: "Strong",
        special: "Can carry same-sized without being encumbered, +1 rtW for Attacks",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 57,
        name: "Swarm",
        special: "On death, each ennemy in contact suffers 1 Wound on a 1D10 = 8+ ; Pass all Resolve ; Do not cause Resolve on death ; - 1 rtW for Attacks",
        cost: 1,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: -1
            },
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 2
            },
            {
                kind: "direct-stat",
                stat: "dvs",
                modifier: 3
            }
        ]
    },
    {
        id: 58,
        name: "Tail swipe",
        special: "May carry out opportunity attacks on rear",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 59,
        name: "Taunt",
        special: "Use 1 Interact Action : an ennemy within 8'' must Resolve OR charge full move the taunter (once/turn by ennemy)",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 60,
        name: "Terrifying",
        special: "Ennemies must Resolve to charge (failure = Action wasted) ; Ennemies suffers -2 Att against self",
        cost: 8,
        characterOnly: true,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 61,
        name: "Tough",
        special: "",
        cost: 2,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: 1
            }
        ]
    },
    {
        id: 62,
        name: "Tracker",
        special: "+2 Sht againts 'ephemeral' ennemies ; May attack/shot 'invisible' annemies with -1 ; The party can reroll their deployment dice ",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "wnd",
                modifier: 1
            }
        ]
    },
    {
        id: 63,
        name: "Trapper",
        special: "Can set up traps within 12'' of self during deployment (3 if character, 1 if minion)",
        cost: 5,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 64,
        name: "Tumbler",
        special: "Can pass through a single ennemy without being stopped or attacked",
        cost: 4,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 65,
        name: "Unarmed Fighter",
        special: "+1 rtW for Attacks",
        cost: 7,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
            {
                kind: "direct-stat",
                stat: "dva",
                modifier: 1
            },
            {
                kind: "direct-stat",
                stat: "attH1",
                modifier: 2
            },
            {
                kind: "direct-stat",
                stat: "attH2",
                modifier: 2
            }
        ]
    },
    {
        id: 66,
        name: "Wayfinder",
        special: "Ignore all Mov/Att modifiers for terrestrial terrain",
        cost: 3,
        characterOnly: false,
        type: 'trait',
        profileAdjustment: [
        ]
    },
    {
        id: 67,
        name: "Bless",
        special: "the target gains +5 to their next die roll",
        cost: 4,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 5
    },
    {
        id: 68,
        name: "Blink",
        special: "the target is teleported 1D5+2",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 8
    },
    {
        id: 69,
        name: "Bilious Blast",
        special: "the target and all models within 1'' of it suffers a rtW with +1, ignoring armour ; if any wound is caused, inflict another",
        cost: 5,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 8,
        difficulty: 7
    },
    {
        id: 70,
        name: "Chain Lightning",
        special: "the target suffers 1 Wound, +1 Wound if casting roll >= 10, +1 Wound if target armoured ; IF any Wound caused, MUST repeat the casting roll on another target within 2'' of the previous one (except self) ",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 4,
        difficulty: 7
    },
    {
        id: 71,
        name: "Charm",
        special: "the target must Resolve (-2 if caster is concentrating, -2 if caster is a sage, -1 if caster is erudite). If failed, immediatly carry out an Action for the casting Player (except Casting)",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 0
    },
    {
        id: 72,
        name: "Confusion",
        special: "the target randomly move 1D5 and will carry only one Action the turn",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 6
    },
    {
        id: 73,
        name: "Curse",
        special: "the target suffers -5 to next roll",
        cost: 4,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 6
    },
    {
        id: 74,
        name: "Empower",
        special: "the target gains +1 Att, +1 if casting roll >= 8, +1 if casting roll >= 10",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 6
    },
    {
        id: 75,
        name: "Entangle",
        special: "the target can't move/charge/climb for the turn ; +1 Wound if casting roll >= 10",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 8,
        difficulty: 7
    },
    {
        id: 76,
        name: "Fear",
        special: "the target must Resolve (-2 if caster is concentrating, -2 if caster is a sage, -1 if caster is erudite). If failed, flee and prompt any friend within 6'' to Resolve",
        cost: 4,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 6
    },
    {
        id: 77,
        name: "Fireball",
        special: "the target and all models within '' of it suffer a rtW ignoring armour. If no Wound suffered, reroll rtW",
        cost: 8,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 7
    },
    {
        id: 78,
        name: "Freeze",
        special: "the target suffers 1 Wound and -1 for next Move, +1 Wound et -1 Mov if casting roll >= 8, +1 Wound et -1 Mov if >= 10",
        cost: 9,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 8,
        difficulty: 6
    },
    {
        id: 79,
        name: "Inspire",
        special: "All friends within 6'' gain +1 Att and +1 Resolve rolls until caster next Action",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 6
    },
    {
        id: 80,
        name: "Invisibility",
        special: "the caster cannot be attacked/shot except by spells or 'trackers' until next Attack/Shoot/Interact/Casting Action",
        cost: 8,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 81,
        name: "Haste",
        special: "the target can make 2 non-casting Actions",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 5
    },
    {
        id: 82,
        name: "Heal",
        special: "the target recovers 1 Wound, +1 if casting >= 8, +1 if casting >= 10",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 5
    },
    {
        id: 83,
        name: "Life Drain",
        special: "the target suffers 1 Wound and the caster recover as much, +1 if casting >= 9, +1 if casting >= 11",
        cost: 8,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 6
    },
    {
        id: 84,
        name: "Mystic missile",
        special: "the target suffers a rtW with +1",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 20,
        difficulty: 7
    },
    {
        id: 85,
        name: "Nova",
        special: "All models in contact with caster suffers a rtW",
        cost: 6,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 86,
        name: "Protection",
        special: "Caster and all friends in contact gain +3 DvA/DvS and ennemies suffers -1 to casting against until caster's next Activation",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 87,
        name: "Entangle",
        special: "The target is pushed directlya way from the caster to 2'', +1 if casting >= 7, +1 if >= 9, +1 if >= 11. Models pushed don't suffers opportunity attacks ; if the target hits another model, both suffers a rtW with -1",
        cost: 5,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 5
    },
    {
        id: 88,
        name: "Sleep",
        special: "the target must Resolve (-2 if caster is concentrating, -2 if caster is a sage, -1 if caster is erudite). If failed, suffers -8 DvA/DvS and take no Actions until awake. To wake up, the target must Resolve at the beginning of his Activation",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 6,
        difficulty: 0
    },
    {
        id: 89,
        name: "Spell Breaker",
        special: "Cancels all current spells with legacy effect within range of the caster",
        cost: 5,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 7
    },
    {
        id: 90,
        name: "Summon",
        special: "The caster declare a 'minion' profile to summon. Rolls 1D10 + 2 if 'Sage', +1 if 'Erudite' => score = summoning pool. When pool sufficient, the minion muts be place in contact with the caster. Pool saved and summoning continued until disrupted (by a wound, a roll of 1, of making other Action than Summoning)",
        cost: 7,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 0
    },
    {
        id: 91,
        name: "Transfigure - Bruiser",
        special: "The caster transform into a 'Belligerent' large 'Warrior' [Res = 3+, Mov = 3'', Att = +5, Sht = /, DvA = 7+, DvS = 5+, +2 rtW ] without its normal traits or gear. Revert to true form at the start or end of next Activation",
        cost: 15,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 92,
        name: "Transfigure - Dissipate",
        special: "The caster turn 'Incorporeal'. Revert to true form at the start or end of next Activation",
        cost: 5,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 93,
        name: "Transfigure - Flyer",
        special: "The caster transform into a 'Flying' small 'Rogue' [Res = 4+, Mov = 9'', Att = +1, Sht = /, DvA = 6+, DvS = 8+, -1 rtW ] without its normal traits or gear. Revert to true form at the start or end of next Activation",
        cost: 10,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 94,
        name: "Transfigure - Growth",
        special: "The caster transform into a larger being with +1 Size. Gains +2 Att, DvS -1, rtW +2. Revert to true form at the start or end of next Activation",
        cost: 15,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },
    {
        id: 95,
        name: "Transfigure - Scurrier",
        special: "The caster transform into a 'Agile', 'Ephemeral' and 'Frenzy' small 'Rogue' [Res = 4+, Mov = 5'', Att = +2, Sht = /, DvA = 7+, DvS = 13+, -1 rtW ] without its normal traits or gear. Revert to true form at the start or end of next Activation",
        cost: 15,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 0,
        difficulty: 6
    },

]
