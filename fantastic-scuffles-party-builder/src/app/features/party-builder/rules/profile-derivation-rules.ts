import { ProfileDefinition } from "../../../models/profile-definition";
import { StatBlock } from "../../../models/stat-block";
import { Archetype } from "../../../types/archetype";

export function deriveIsCharacter(archetype: Archetype): boolean {
    return archetype !== "minion";
}

export function deriveQuantity(archetype: Archetype, previousQuantity?: number): number {
    if (deriveIsCharacter(archetype)) {
        return 1;
    }
    return previousQuantity ?? 1;
}

export function deriveBaseStats(archetype: Archetype): StatBlock {
    switch (archetype) {
        case "warrior":
            return {
                res: 4,
                mov: 4,
                attH1: 2,
                attH2: 2,
                sht: -1,
                wnd: 7,
                dva: 7,
                dvs: 6
            };
        case "sage":
            return {
                res: 5,
                mov: 4,
                attH1: -1,
                attH2: -1,
                sht: -2,
                wnd: 5,
                dva: 5,
                dvs: 6
            };
        case "rogue":
            return {
                res: 4,
                mov: 5,
                attH1: 1,
                attH2: 1,
                sht: 1,
                wnd: 6,
                dva: 6,
                dvs: 7
            };
        case "minion":
            return {
                res: 5,
                mov: 4,
                attH1: 0,
                attH2: 0,
                sht: -1,
                wnd: 3,
                dva: 6,
                dvs: 6
            };
    }
}

export function deriveBaseCost(archetype: Archetype): number {
    switch(archetype) {
        case "warrior": return 10;
        case "sage": return 10;
        case "rogue": return 10;
        case "minion": return 3;
    }
}