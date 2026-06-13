import { EquipmentDefinition } from "./equipment-definition";
import { ProfileAdjustment } from "./profile-adjustment";


interface BaseMiscDefinition extends EquipmentDefinition {
    profileAdjustments: ProfileAdjustment[];
}

export interface StandaloneMiscDefinition extends BaseMiscDefinition {
  kind: "standalone";
}

export interface WeaponEnhancementDefinition extends BaseMiscDefinition {
  kind: "weapon-enhancement";
}

export interface MissileEnhancementDefinition extends BaseMiscDefinition {
  kind: "missile-enhancement";
}

export type MiscDefinition = StandaloneMiscDefinition | WeaponEnhancementDefinition | MissileEnhancementDefinition;