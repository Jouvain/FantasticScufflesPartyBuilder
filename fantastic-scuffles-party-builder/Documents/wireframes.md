# Wireframes Mobile

## Global structure

```text
┌────────────────────┐
│ Header             │
├────────────────────┤
│ Team Summary       │
├────────────────────┤
│ Constraint Panel   │
├────────────────────┤
│ Unit Cards List    │
│                    │
│                    │
│                    │
├────────────────────┤
│ Floating Add Btn   │
└────────────────────┘
```

## main screen : party builder

```text
┌────────────────────────┐
│☰ Fantastic Scuffles    │
├────────────────────────┤
│ Golden Silence         │
│ 87 / 100 pts           │
│ 6 unit profiles        │
├────────────────────────┤
│ Constraints            │
│ ✔ Character present    │
│ ✔ Under profile limit  │
│ ✖ Budget exceeded      │
├────────────────────────┤
│ UNIT PROFILES          │
│                        │
│ ┌────────────────────┐ │
│ │ Silent Templar     │ │
│ │ Warrior Character  │ │
│ │ Medium             │ │
│ │ Cost: 18           │ │
│ │ Qty: 1             │ │
│ │ [Edit] [ + ]       │ │
│ └────────────────────┘ │
│                        │
│ ┌────────────────────┐ │
│ │ Arquebusier        │ │
│ │ Minion             │ │
│ │ Cost: 6            │ │
│ │ Qty: 3             │ │
│ │ [Edit] [ + ]       │ │
│ └────────────────────┘ │
│                        │
│                        │
│                        │
│                  (+)   │
└────────────────────────┘
```

## profile editor screen

```text
┌────────────────────────┐
│ Fantastic Scuffles     │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
├────────────────────────┤
│ Edit Unit              │
│ ────────────────────── │
│                        │
│ Name                   │
│ [Silent Templar      ] │
│                        │
│ Archetype              │
│ ● Warrior              │
│ ○ Rogue                │
│ ○ Sage                 │
│ ○ Minion               │
│                        │
│ Size                   │
│ [Average ▼]            │
│                        │
│ Equipment              │
│ Hand 1 [Sword ▼]       │
│ Hand 2 [Shield ▼]      │
│ Armor  [Heavy ▼]       │
│ Misc   [Banner ▼]      │
│                        │
│ Traits (2/4)           │
│ • Fearless             │
│ • Defender             │
│ [+ Add Trait]          │
│                        │
│ Cost: 18 pts           │
│                        │
│ [Cancel] [Save]        │
└────────────────────────┘
```

## profile creation screen
```text
┌────────────────────────┐
│ Fantastic Scuffles     │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
├────────────────────────┤
│ Create Unit            │
│ ────────────────────── │
│                        │
│ Name                   │
│ [                    ] │
│                        │
│ Archetype              │
│ ○ Warrior              │
│ ○ Rogue                │
│ ○ Sage                 │
│ ○ Minion               │
│                        │
│ Size                   │
│ [Average ▼]            │
│                        │
│ Equipment ▼            │
│ [+ Add Equipt]         │
                         │
│ Traits ▼               │
│ [+ Add Trait]          │
│                        │
│ Cost: 0 pts            │
│                        │
│ [Cancel] [Save]        │
└────────────────────────┘
```

## export screen

```text
┌────────────────────┐
│ Export Team        │
├────────────────────┤
│ [Download PDF]     │
│                    │
│ [Export JSON]      │
│                    │
│ [Import Team]      │
│                    │
│ [Cancel]           │
└────────────────────┘
```

# Wireframes Desktop

## main screen : party builder

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Fantastic Scuffles Party Builder                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ Team: Golden Silence                                                        │
│ Budget: 87 / 100 pts                                                        │
│ Profiles: 6 / 9                                                             │
│ Characters: 1                                                               │
│                                                                              │
│ [Export PDF] [Export JSON] [Import Team] [+ Add Unit Profile] [budget box]   │
├──────────────────────────────────────────────────────────────────────────────┤
│ CONSTRAINTS                                                                 │
│                                                                              │
│ ✔ At least one Character   ✔ Max 9 Profiles   ✖ Budget Exceeded             │
├──────────────────────────────────────────────────────────────────────────────┤
│ UNIT PROFILES                                                               │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ Silent Templar                                                         │ │
│ │ Warrior Character • Average                                            │ │
│ │ Sword + Shield • Heavy Armor                                           │ │
│ │ Traits: Fearless, Defender                                             │ │
│ │ Cost: 18 pts • Qty: 1                                                  │ │
│ │                                                [Edit] [Duplicate] [X]  │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ Arquebusier                                                            │ │
│ │ Minion • Average                                                       │ │
│ │ Arquebus                                                               │ │
│ │ Cost: 6 pts • Qty: 3                                                   │ │
│ │                                                [Edit] [Duplicate] [X]  │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ Golden Knight                                                          │ │
│ │ Warrior Character • Large                                              │ │
│ │ Great Weapon                                                           │ │
│ │ Traits: Brutal                                                         │ │
│ │ Cost: 22 pts • Qty: 1                                                  │ │
│ │                                                [Edit] [Duplicate] [X]  │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## profile editor screen

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Fantastic Scuffles Party Builder                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ Team: Golden Silence                                                        │
│ Budget: 87 / 100 pts                                                        │
│ Profiles: 6 / 9                                                             │
│ Characters: 1                                                               │
│                                                                              │
│ [Export PDF]  [Export JSON]  [Import Team]  [+ Add Unit Profile]            │
├──────────────────────────────────────────────────────────────────────────────┤
│ CONSTRAINTS                                                                 │
│                                                                              │
│ ✔ At least one Character   ✔ Max 9 Profiles   ✖ Budget Exceeded             │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ UNIT PROFILES                        │ EDIT UNIT PROFILE                     │
│                                      │                                       │
│ ┌──────────────────────────────────┐ │ Name                                  │
│ │ Silent Templar                 │ │ [Silent Templar                    ]   │
│ │ Warrior Character • Average    │ │                                       │
│ │ Cost: 18 pts • Qty: 1          │ │ Archetype                             │
│ │                     [Editing]  │ │ ○ Warrior                              │
│ └──────────────────────────────────┘ │ ○ Rogue                                │
│                                      │ ○ Sage                                 │
│ ┌──────────────────────────────────┐ │ ○ Minion                               │
│ │ Arquebusier                    │ │                                       │
│ │ Minion • Average               │ │ Size                                  │
│ │ Cost: 6 pts • Qty: 3           │ │ [Average ▼]                           │
│ └──────────────────────────────────┘ │                                       │
│                                      │ Equipment                             │
│ ┌──────────────────────────────────┐ │                                       │
│ │ Golden Knight                  │ │ Hand 1 [Sword ▼]                     │
│ │ Warrior Character • Large      │ │ Hand 2 [Shield ▼]                    │
│ │ Cost: 22 pts • Qty: 1          │ │ Armor  [Heavy Armor ▼]               │
│ └──────────────────────────────────┘ │ Misc    [Banner ▼]                    │
│                                      │                                       │
│                                      │ Traits (2/4)                         │
│                                      │ • Fearless                           │
│                                      │ • Defender                           │
│                                      │ [+ Add Trait]                        │
│                                      │                                       │
│                                      │ SPELLS                               │
│                                      │ 0 / 1 allowed for Warrior            │
│                                      │                                       │
│                                      │ TOTAL COST                           │
│                                      │ 18 pts                               │
│                                      │                                       │
│                                      │ [Cancel]      [Save Changes]         │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

## profile creation screen 
```text
┌──────────────────────────────────────┬───────────────────────────────────────┐
│ UNIT PROFILES                        │ CREATE UNIT PROFILE                   │
│                                      │                                       │
│ ┌──────────────────────────────────┐ │ Name                                  │
│ │ Silent Templar                 │ │ [                                   ] │
│ └──────────────────────────────────┘ │                                       │
│                                      │ Archetype                             │
│ ┌──────────────────────────────────┐ │ ○ Warrior                              │
│ │ Arquebusier                    │ │ ○ Rogue                                │
│ └──────────────────────────────────┘ │ ○ Sage                                 │
│                                      │ ○ Minion                               │
│                                      │                                       │
│                                      │ Size                                  │
│                                      │ [Average ▼]                           │
│                                      │                                       │
│                                      │ Equipment                             │
│                                      │ Hand 1 [None ▼]                       │
│                                      │ Hand 2 [None ▼]                       │
│                                      │ Armor  [None ▼]                       │
│                                      │ Misc    [None ▼]                      │
│                                      │                                       │
│                                      │ Traits (0/4)                          │
│                                      │ [+ Add Trait]                         │
│                                      │                                       │
│                                      │ TOTAL COST                            │
│                                      │ 0 pts                                 │
│                                      │                                       │
│                                      │ [Cancel]      [Create Profile]        │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

## export screen

# Overview

desktop = persistent side drawer

tablet = overley side drawer

mobile = bottom overlay drawer



