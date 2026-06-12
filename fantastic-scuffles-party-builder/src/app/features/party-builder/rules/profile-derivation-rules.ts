import { ArmorDefinition } from "../../../models/armor-definition";
import { EquippedMeleeWeapon } from "../../../models/equipped-melee-weapon";
import { StandaloneMiscDefinition } from "../../../models/misc-definition";
import { MissileWeaponDefinition } from "../../../models/missile-weapon-definition";
import { ProfileAdjustment } from "../../../models/profile-adjustment";
import { StatBlock } from "../../../models/stat-block";
import { Archetype } from "../../../types/archetype";
import { MeleeSlot } from "../../../types/melee-slot";
import { Size } from "../../../types/size";
import { Trait } from "../../../types/trait-type";

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

export function deriveSizeCost(size: Size): number {
  switch (size) {
    case "small": return -1;
    case "average": return 0;
    case "large": return 15;
    case "huge": return 25;
  }
}


export function applySizeModifierOnStats(stats: StatBlock, size: Size): void {
    if(size === "small") {
        stats.wnd -= 1;
        stats.dvs += 1;
    }
    if (size === "large") {
        stats.res -= 1;
        stats.attH1 += 1;
        stats.attH2 += 1;
        stats.wnd += 1;
        stats.dvs -= 1;
    }
    if(size === "huge") {
        stats.res -= 2;
        stats.wnd += 2;
        stats.dva -= 1;
        stats.dvs -= 2;
    }
}

export interface ProfileDerivationInput {
  archetype: Archetype;
  size: Size;
  hand1: EquippedMeleeWeapon;
  hand2: EquippedMeleeWeapon;
  missile: MissileWeaponDefinition;
  armour: ArmorDefinition;
  miscItems: StandaloneMiscDefinition[];
  traits: Trait[];
}

const MELEE_STAT_BY_SLOT = {
  hand1: "attH1",
  hand2: "attH2"
} satisfies Record<MeleeSlot, "attH1" | "attH2">;


function applyAdjustment(
  stats: StatBlock,
  adjustment: ProfileAdjustment,
  meleeSlot?: MeleeSlot
): void {
  switch (adjustment.kind) {
    case "direct-stat":
      stats[adjustment.stat] += adjustment.modifier;
      return;

    case "equipped-melee-attack":
      if (!meleeSlot) {
        throw new Error(
          "A melee slot is required for this adjustment"
        );
      }

      stats[MELEE_STAT_BY_SLOT[meleeSlot]] +=
        adjustment.modifier;
      return;
  }
}

function applyMeleeWeapon(
  stats: StatBlock,
  equipped: EquippedMeleeWeapon
): void {
  const stat = MELEE_STAT_BY_SLOT[equipped.slot];
  stats[stat] += equipped.weapon.attModifier;
}

function applyWeaponEnhancement(
  stats: StatBlock,
  equipped: EquippedMeleeWeapon
): void {
  if (!equipped.enhancement) {
    return;
  }

  for (
    const adjustment
    of equipped.enhancement.profileAdjustments
  ) {
    applyAdjustment(stats, adjustment, equipped.slot);
  }
}


export function deriveStats(
  input: ProfileDerivationInput
): StatBlock {
  const stats = { ...deriveBaseStats(input.archetype) };

  applySizeModifierOnStats(stats, input.size);

  applyMeleeWeapon(stats, input.hand1);
  applyMeleeWeapon(stats, input.hand2);

  applyWeaponEnhancement(stats, input.hand1);
  applyWeaponEnhancement(stats, input.hand2);

  stats.sht += input.missile.shtModifier;
  stats.dva += input.armour.dvaModifier;
  stats.dvs += input.armour.dvsModifier;

  for (const item of input.miscItems) {
    for (const adjustment of item.profileAdjustments) {
      applyAdjustment(stats, adjustment);
    }
  }

  for (const trait of input.traits) {
    for (const adjustment of trait.profileAdjustment) {
      applyAdjustment(stats, adjustment);
    }
  }

  return stats;
}

function deriveEquippedWeaponCost(
  equipped: EquippedMeleeWeapon
): number {
  return (
    equipped.weapon.cost
    + (equipped.enhancement?.cost ?? 0)
  );
}

export function deriveCost(
  input: ProfileDerivationInput
): number {
  const miscCost = input.miscItems.reduce(
    (sum, item) => sum + item.cost,
    0
  );

  const traitCost = input.traits.reduce(
    (sum, trait) => sum + trait.cost,
    0
  );

  return (
    deriveBaseCost(input.archetype)
    + deriveSizeCost(input.size)
    + deriveEquippedWeaponCost(input.hand1)
    + deriveEquippedWeaponCost(input.hand2)
    + input.missile.cost
    + input.armour.cost
    + miscCost
    + traitCost
  );
}

export interface ProfileDerivationResult {
  stats: StatBlock;
  cost: number;
  isCharacter: boolean;
}

export function deriveProfile(input: ProfileDerivationInput): ProfileDerivationResult {
  return {
    stats: deriveStats(input),
    cost: deriveCost(input),
    isCharacter: deriveIsCharacter(input.archetype)
  };
}
