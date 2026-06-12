import { Archetype } from "../types/archetype";
import { Size } from "../types/size";
import { Trait } from "../types/trait-type";
import { ArmorDefinition } from "./armor-definition";
import { EquippedMeleeWeapon } from "./equipped-melee-weapon";
import { StandaloneMiscDefinition } from "./misc-definition";
import { MissileWeaponDefinition } from "./missile-weapon-definition";
import { StatBlock } from "./stat-block";


export interface ProfileDefinition {
    id: number;
    nom: string;
    archetype: Archetype;
    size: Size;
    isCharacter: boolean;
    stats: StatBlock;
    hand1: EquippedMeleeWeapon;
    hand2: EquippedMeleeWeapon;
    missile : MissileWeaponDefinition;
    armour: ArmorDefinition;
    misc1: StandaloneMiscDefinition | null;
    misc2: StandaloneMiscDefinition | null;
    trait1: Trait | null;
    trait2: Trait | null;
    trait3: Trait | null;
    trait4: Trait | null;
    cost: number;
    quantity: number;
}
