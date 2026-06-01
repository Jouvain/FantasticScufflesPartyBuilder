import { EquipmentDefinition } from "./equipment-definition";

export interface MeleeWeaponDefinition extends EquipmentDefinition {
    attModifier: number;
    rtwModifier: number;
    grip: 'single' | 'double';
}