import { TraitDefinition } from "./traits-definition";

export interface Spell extends TraitDefinition {
    difficulty: number;
    range: number;
}