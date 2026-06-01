import { EquipmentDefinition } from "./equipment-definition";

export interface ArmorDefinition extends EquipmentDefinition {
    dvaModifier: number;
    dvsModifier: number;
}