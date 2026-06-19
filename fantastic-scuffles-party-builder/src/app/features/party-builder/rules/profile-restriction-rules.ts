// minio = 0 spell

import { ValidatorFn } from "@angular/forms";
import { Archetype } from "../../../types/archetype"
import { Trait } from "../../../types/trait-type";
import { ArmorDefinition } from "../../../models/armor-definition";

// warrior-rogue = 1 spell

// agile = no armour/shield

// double grip OU 2* single

// shield = uniquement renowned shield

type ProfileRestrictionFormValue = {
    archetype: Archetype;
    trait1: Trait | null;
    trait2: Trait | null;
    trait3: Trait | null;
    trait4: Trait | null;
    armour: ArmorDefinition;
};

export interface ProfileRestrictionViolation {
    code: string;
    message: string;
}

export const profileRestrictionValidator: ValidatorFn = (control) => {
    const value = control.getRawValue() as ProfileRestrictionFormValue;

    const traits = [
        value.trait1,
        value.trait2,
        value.trait3,
        value.trait4,
    ].filter((trait): trait is Trait => trait !== null);

    const hasSpell = traits.some((trait) => trait.type === "spell");
    const spellsNb = traits.filter((trait) => trait.type === "spell").length;
    const isAgile = traits.some((trait) => trait.name === "Agile");
    const violations: ProfileRestrictionViolation[] = [];

    if(value.archetype === "minion" && hasSpell) {
        violations.push({
            code: "minion-has-spell",
            message: "Minions cannot have spells"
        });
    }
    if((value.archetype === "rogue" || value.archetype === "warrior") && spellsNb > 1) {
        violations.push({
            code: "too-much-spells",
            message: "rogue and warriors cannot have more than 1 spell"
        });
    }
    if(isAgile && value.armour?.name != "No armour") {
        violations.push({
            code: "agile-armored",
            message: "an 'Agile' model cannot wear armour"
        });        
    }

    return violations.length > 0 ? {profileRestrictionViolations: violations} : null;
}

