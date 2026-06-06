import { MiscDefinition } from "./misc-definition";

export interface EquipmentDefinition {
    id: string;
    name: string;
    cost: number;
    special :string;
    enhancement?: MiscDefinition;
}