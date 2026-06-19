
import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";
import { Archetype } from "../../../types/archetype"
import { Trait } from "../../../types/trait-type";
import { ArmorDefinition } from "../../../models/armor-definition";
import { EquippedMeleeWeapon } from "../../../models/equipped-melee-weapon";
import { Size } from "../../../types/size";
import { MiscDefinition, MissileEnhancementDefinition, StandaloneMiscDefinition } from "../../../models/misc-definition";
import { MissileWeaponDefinition } from "../../../models/missile-weapon-definition";

// shield = uniquement renowned shield
// no mount for flying model
// only small minions as Swarms


type ProfileRestrictionFormValue = {
    archetype: Archetype;
    trait1: Trait | null;
    trait2: Trait | null;
    trait3: Trait | null;
    trait4: Trait | null;
    armour: ArmorDefinition;
    hand1: EquippedMeleeWeapon;
    hand2: EquippedMeleeWeapon;
    size: Size;
    misc1: MiscDefinition | null;
    misc2: MiscDefinition | null;
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
    const hasShield = value.hand1.weapon.name.includes("hield") || value.hand2.weapon.name.includes("hield");
    const hasDoubleGrip = value.hand1.weapon.grip === "double" || value.hand2.weapon.grip === "double"; 
    const hasTwoWeapons = value.hand1.weapon.name != "No weapon" && value.hand2.weapon.name != "No weapon";
    const hasCharacterOnlyTrait = traits.some((trait) => trait.characterOnly);
    const characterOnlyTraits = traits.filter((trait) => trait.characterOnly);
    const isMounted = value.misc1?.name.includes("Mount") || value.misc2?.name.includes("Mount");
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
    if(isAgile && (value.armour?.name != "No armour" || hasShield)) {
        violations.push({
            code: "agile-armored",
            message: "an 'Agile' model cannot wear armour"
        });        
    }
    if(hasDoubleGrip && hasTwoWeapons) {
        violations.push({
            code: "too-much-weapons",
            message: "the model has too much weapons"
        });         
    }
    if(value.archetype === "minion" && hasCharacterOnlyTrait) {
        violations.push({
            code: "character-only",
            message: `a minion cannot have ${characterOnlyTraits[0].name}`
        });            
    }
    if((value.hand1.weapon.name.includes("hield") && (value.hand1.enhancement && value.hand1.enhancement?.name != "Renowned shield")) || (value.hand2.weapon.name.includes("hield") && (value.hand2.enhancement && value.hand2.enhancement?.name != "Renowned shield"))) {
        violations.push({
            code: "shield-too-custom",
            message: `a shield can only be Renowned`
        }); 
    }
    if(traits.some((trait) => trait.name === "Swarm") && (value.archetype != "minion" || value.size != "small")) {
        violations.push({
            code: "only-small-swarms",
            message: `a Swarm must be a small minion`
        }); 
    }
    if(traits.some((trait)=> trait.name === "Flying") && isMounted) {
        violations.push({
            code: "flyer-is-mounted",
            message: `a Flyer cannot have a mount`
        });         
    }

    return violations.length > 0 ? {profileRestrictionViolations: violations} : null;
}

