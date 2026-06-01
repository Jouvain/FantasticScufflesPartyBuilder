import { EquipmentDefinition } from "./equipment-definition";

export interface MissileWeaponDefinition extends EquipmentDefinition {
    range: number;
    shtModifier: number;
    rtwModifier: number;
}