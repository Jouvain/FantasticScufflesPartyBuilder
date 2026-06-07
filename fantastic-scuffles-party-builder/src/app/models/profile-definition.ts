import { Archetype } from "../types/archetype";
import { Size } from "../types/size";
import { Trait } from "../types/trait-type";
import { ArmorDefinition } from "./armor-definition";
import { MeleeWeaponDefinition } from "./melee-weapon-definition";
import { MiscDefinition } from "./misc-definition";
import { MissileWeaponDefinition } from "./missile-weapon-definition";
import { StatBlock } from "./stat-block";


export interface ProfileDefinition {
    id: number;
    nom: string;
    archetype: Archetype;
    size: Size;
    isCharacter: boolean;
    stats: StatBlock;
    hand1: MeleeWeaponDefinition;
    hand2: MeleeWeaponDefinition;
    missile : MissileWeaponDefinition;
    armour: ArmorDefinition;
    misc1: MiscDefinition;
    misc2: MiscDefinition;
    trait1: Trait | null;
    trait2: Trait | null;
    trait3: Trait | null;
    trait4: Trait | null;
    cost: number;
}