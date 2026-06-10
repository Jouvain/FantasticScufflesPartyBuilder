import { ProfileDefinition } from "../../../models/profile-definition";
import { Archetype } from "../../../types/archetype";

export function deriveIsCharacter(archetype: Archetype): boolean {
    return archetype !== "minion";
}

export function deriveQuantity(archetype: Archetype, previousQuantity?: number): number {
    if(deriveIsCharacter(archetype)) {
        return 1;
    }
    return previousQuantity ?? 1;
}