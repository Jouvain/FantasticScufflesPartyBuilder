import { Archetype } from "../types/archetype";
import { Size } from "../types/size";
import { EquipmentDefinition } from "./equipment-definition";
import { StatBlock } from "./stat-block";
import { TraitDefinition } from "./traits-definition";

export interface ProfileDefinition {
    id: number;
    nom: string;
    archetype: Archetype;
    size: Size;
    isCharacter: boolean;
    stats: StatBlock;
    equipment: EquipmentDefinition[];
    traits: TraitDefinition[];
    cost: number;
}