import { ProfileAdjustment } from "./profile-adjustment";

export interface TraitDefinition {
    id: number;
    name: string;
    special: string;
    cost: number;
    profileAdjustment: ProfileAdjustment;
    characterOnly: boolean;
}