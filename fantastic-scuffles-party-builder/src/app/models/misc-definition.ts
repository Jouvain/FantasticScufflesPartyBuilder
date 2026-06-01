import { EquipmentDefinition } from "./equipment-definition";
import { ProfileAdjustment } from "./profile-adjustment";

export interface MiscDefinition extends EquipmentDefinition {
    profileAdjustment: ProfileAdjustment;
}