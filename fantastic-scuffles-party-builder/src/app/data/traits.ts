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
        id: 100,
        name: "Bless",
        special: "the target gains +5 to their next die roll",
        cost: 4,
        characterOnly: true,
        type: 'spell',
        profileAdjustment: [],
        range: 12,
        difficulty: 5
    }

]
