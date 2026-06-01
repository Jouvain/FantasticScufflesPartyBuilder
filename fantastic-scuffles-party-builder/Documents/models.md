# profile :
    ## nom
    ## archetype {warrior / rogue / sage / minion}
    ## isCharacter
    ## size {small / average / large / huge}
    ## stats {RES, ATT H1, ATT H2, SHT, MOV, DVA, DVS, WND}
    ## cost
    ## traits {liste de 40 traits potentiels}
        ### subtype traits "standards" {cost, rule, bool character-only}
        ### subtype "spell" {cost, rule, difficulty, range}
    ## equipement {liste de 40 items potentiels}
        ### type "Hand" => subtype one-hand / two-hand {name, cost, bonus-malus ATT, rule}
        ### type "armor" => {name, cost, rule}
        ### type "misc" => {name, cost, rule}

[constraint] MAX 4 Traits
[constraint] MAX 1 Spell within Traits IF Warrior or Rogue archetype
[constraint] MAX 0 Spell within Traits IF Minion archetype
[constraint] only Minions can have Quantity in Party > 1
