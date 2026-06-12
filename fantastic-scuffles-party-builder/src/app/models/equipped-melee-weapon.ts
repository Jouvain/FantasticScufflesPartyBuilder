import { MeleeSlot } from "../types/melee-slot";
import { MeleeWeaponDefinition } from "./melee-weapon-definition";
import { WeaponEnhancementDefinition } from "./misc-definition";

export interface EquippedMeleeWeapon {
    slot: MeleeSlot;
    weapon: MeleeWeaponDefinition;
    enhancement: WeaponEnhancementDefinition | null;
}