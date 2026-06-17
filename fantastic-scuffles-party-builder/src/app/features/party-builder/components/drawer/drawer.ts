import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Archetype } from '../../../../types/archetype';
import { Size } from '../../../../types/size';
import { MeleeWeaponDefinition } from '../../../../models/melee-weapon-definition';
import { MissileWeaponDefinition } from '../../../../models/missile-weapon-definition';
import { MissileEnhancementDefinition, StandaloneMiscDefinition, WeaponEnhancementDefinition } from '../../../../models/misc-definition';
import { Trait } from '../../../../types/trait-type';
import { ProfileDefinition } from '../../../../models/profile-definition';
import { StatBlock } from '../../../../models/stat-block';
import { ArmorDefinition } from '../../../../models/armor-definition';
import { ARMORS } from '../../../../data/armors';
import { MELEE_WEAPONS } from '../../../../data/melee-weapons';
import { MISSILE_WEAPONS } from '../../../../data/missile-weapons';
import { MISC } from '../../../../data/misc';
import { TRAITS } from '../../../../data/traits';
import { DrawerStore } from '../../services/drawer-store';
import { PartyStore } from '../../services/party-store';
import {
  deriveBaseCost,
  deriveBaseStats,
  deriveProfile,
  deriveQuantity,
  ProfileDerivationInput
} from '../../rules/profile-derivation-rules';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EquippedMeleeWeapon } from '../../../../models/equipped-melee-weapon';

type ProfileForm = {
  id: FormControl<number>;
  nom: FormControl<string>;
  archetype: FormControl<Archetype>;
  size: FormControl<Size>;
  isCharacter: FormControl<boolean>;
  stats: FormGroup<StatBlockForm>;
  hand1: FormGroup<EquippedMeleeWeaponForm>;
  hand2: FormGroup<EquippedMeleeWeaponForm>;
  missile: FormControl<MissileWeaponDefinition>;
  missileMisc: FormControl<MissileEnhancementDefinition | null>;
  armour: FormControl<ArmorDefinition>;
  misc1: FormControl<StandaloneMiscDefinition | null>;
  misc2: FormControl<StandaloneMiscDefinition | null>;
  trait1: FormControl<Trait | null>;
  trait2: FormControl<Trait | null>;
  trait3: FormControl<Trait | null>;
  trait4: FormControl<Trait | null>;
  cost: FormControl<number>;
}

type EquippedMeleeWeaponForm = {
  weapon: FormControl<MeleeWeaponDefinition>;
  enhancement: FormControl<WeaponEnhancementDefinition | null>;
};

type StatBlockForm = {
  res: FormControl<number>;
  attH1: FormControl<number>;
  attH2: FormControl<number>;
  sht: FormControl<number>;
  mov: FormControl<number>;
  dva: FormControl<number>;
  dvs: FormControl<number>;
  wnd: FormControl<number>;
};


export const WEAPON_ENHANCEMENTS =
  MISC.filter(
    (item): item is WeaponEnhancementDefinition =>
      item.kind === "weapon-enhancement"
  );

export const MISSILE_ENHANCEMENTS = MISC.filter(
  (item): item is WeaponEnhancementDefinition =>
    item.kind === "missile-enhancement"
);

export const STANDALONE_MISC =
  MISC.filter(
    (item): item is StandaloneMiscDefinition =>
      item.kind === "standalone"
  );

export const NORMAL_TRAITS = TRAITS.filter((trait) => trait.type != "spell");
export const SPELL_TRAITS = TRAITS.filter((trait) => trait.type === "spell");

const defaultHand1 = MELEE_WEAPONS[0];
const defaultHand2 = MELEE_WEAPONS[0];
const defaultMissile = MISSILE_WEAPONS[0];
const defaultArmour = ARMORS[0];
const defaultMisc1 = null;
const defaultMisc2 = null;



@Component({
  selector: 'app-drawer',
  imports: [ReactiveFormsModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  public readonly drawerStore = inject(DrawerStore);
  public readonly partyStore = inject(PartyStore);

  isOpen = input<boolean>(false);
  isRuleModalOpen = false;
  profileSaved = output<ProfileDefinition>();

  meleeWeapons = MELEE_WEAPONS;
  missileWeapons = MISSILE_WEAPONS;
  armors = ARMORS;
  weaponEnhancements = WEAPON_ENHANCEMENTS;
  missileWeaponEnhancements = MISSILE_ENHANCEMENTS;
  standaloneMiscItems = STANDALONE_MISC;
  traits = NORMAL_TRAITS;
  spells = SPELL_TRAITS;

  archetypeSpecials: Record<Archetype, string> = {
    warrior: "Can attack with each Action during the same activation",
    sage: "+2 to casting rolls",
    rogue: "+2 to thievery rolls",
    minion: ""
  }

  sizeSpecials: Record<Size, string> = {
    small: "+1 to thievery rolls",
    average: "",
    large: "-1 rtW for opponents",
    huge: "-2 rtW for opponents"
  }

  archetypes: Archetype[] = ['warrior', 'sage', 'rogue', 'minion'];
  sizes: Size[] = ['small', 'average', 'large', 'huge'];

  profileForm: FormGroup<ProfileForm> = this.createProfileForm();

  constructor() {
    effect(() => {
      this.profileForm = this.createProfileForm(this.drawerStore.profile());
      this.refreshDerivedProfile();
      this.watchStatDerivation();
    });

    effect(() => {
      this.document.body.classList.toggle('drawer-open', this.drawerStore.isOpen());
    });

    this.destroyRef.onDestroy(() => {
      this.document.body.classList.remove('drawer-open');
    });
  }

  public saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const newProfile = this.toProfileDefinition();

    if (!newProfile) {
      return;
    }

    if (this.drawerStore.profile()) {
      this.partyStore.updateProfile(newProfile);
    } else {
      this.partyStore.addProfile(newProfile);
    }

    this.profileForm.reset();
    this.drawerStore.close();
    console.log(newProfile);
  }

  public cancel(): void {
    this.profileForm.reset();
    this.drawerStore.close();
  }

  public toggleRuleModal(): void {
    this.isRuleModalOpen = !this.isRuleModalOpen;
  }

  private createProfileForm(profile?: ProfileDefinition | null): FormGroup<ProfileForm> {
    return new FormGroup<ProfileForm>({
      id: new FormControl(profile?.id ?? 0, {
        nonNullable: true
      }),
      nom: new FormControl(profile?.nom ?? '', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      archetype: new FormControl(profile?.archetype ?? 'warrior', {
        nonNullable: true
      }),
      size: new FormControl(profile?.size ?? 'average', {
        nonNullable: true
      }),
      isCharacter: new FormControl(profile?.isCharacter ?? false, {
        nonNullable: true
      }),
      stats: this.createStatsForm(profile?.stats ?? deriveBaseStats(profile?.archetype ?? "warrior")),
      hand1: this.createMeleeWeaponForm({
        slot: "hand1",
        weapon: profile?.hand1.weapon ?? defaultHand1,
        enhancement: profile?.hand1.enhancement ?? null
      }),
      hand2: this.createMeleeWeaponForm({
        slot: "hand2",
        weapon: profile?.hand2.weapon ?? defaultHand2,
        enhancement: profile?.hand2.enhancement ?? null
      }),
      missile: new FormControl(profile?.missile ?? defaultMissile, {
        nonNullable: true
      }),
      missileMisc: new FormControl(profile?.missileMisc ?? null),
      armour: new FormControl(profile?.armour ?? defaultArmour, {
        nonNullable: true
      }),
      misc1: new FormControl(profile?.misc1 ?? defaultMisc1),
      misc2: new FormControl(profile?.misc2 ?? defaultMisc2),
      trait1: new FormControl(profile?.trait1 ?? null),
      trait2: new FormControl(profile?.trait2 ?? null),
      trait3: new FormControl(profile?.trait3 ?? null),
      trait4: new FormControl(profile?.trait4 ?? null),
      cost: new FormControl(profile?.cost ?? deriveBaseCost(profile?.archetype ?? "warrior"), {
        nonNullable: true,
        validators: [Validators.min(0)]
      })
    });
  }


  private createStatsForm(stats?: StatBlock): FormGroup<StatBlockForm> {
    return new FormGroup<StatBlockForm>({
      res: new FormControl(stats?.res ?? 5, { nonNullable: true }),
      attH1: new FormControl(stats?.attH1 ?? -1, { nonNullable: true }),
      attH2: new FormControl(stats?.attH2 ?? 5, { nonNullable: true }),
      sht: new FormControl(stats?.sht ?? 6, { nonNullable: true }),
      mov: new FormControl(stats?.mov ?? 4, { nonNullable: true }),
      dva: new FormControl(stats?.dva ?? 5, { nonNullable: true }),
      dvs: new FormControl(stats?.dvs ?? 5, { nonNullable: true }),
      wnd: new FormControl(stats?.wnd ?? 3, { nonNullable: true }),
    });
  }

  private createMeleeWeaponForm(
    equipped: EquippedMeleeWeapon
  ): FormGroup<EquippedMeleeWeaponForm> {
    return new FormGroup({
      weapon: new FormControl(equipped.weapon, { nonNullable: true }),
      enhancement: new FormControl(equipped.enhancement)
    });
  }




  private toProfileDefinition(): ProfileDefinition | null {
    const raw = this.profileForm.getRawValue();
    const existing = this.drawerStore.profile();

    return {
      id: raw.id,
      nom: raw.nom,
      archetype: raw.archetype,
      size: raw.size,
      isCharacter: raw.isCharacter,
      stats: raw.stats,
      hand1: {
        slot: "hand1",
        weapon: raw.hand1.weapon,
        enhancement: raw.hand1.enhancement
      },
      hand2: {
        slot: "hand2",
        weapon: raw.hand2.weapon,
        enhancement: raw.hand2.enhancement
      },
      missile: raw.missile,
      missileMisc: raw.missileMisc,
      armour: raw.armour,
      misc1: raw.misc1,
      misc2: raw.misc2,
      trait1: raw.trait1,
      trait2: raw.trait2,
      trait3: raw.trait3,
      trait4: raw.trait4,
      cost: raw.cost,
      quantity: deriveQuantity(raw.archetype, existing?.quantity)
    };
  }

  private watchStatDerivation(): void {
    this.profileForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refreshDerivedProfile());
  }


  private refreshDerivedProfile(): void {
    const result = deriveProfile(this.buildDerivationInput());

    this.profileForm.patchValue({
      stats: result.stats,
      cost: result.cost,
      isCharacter: result.isCharacter
    }, { emitEvent: false });
  }

  private buildDerivationInput(): ProfileDerivationInput {
    const raw = this.profileForm.getRawValue();

    return {
      archetype: raw.archetype,
      size: raw.size,

      hand1: {
        slot: "hand1",
        weapon: raw.hand1.weapon,
        enhancement: raw.hand1.enhancement
      },

      hand2: {
        slot: "hand2",
        weapon: raw.hand2.weapon,
        enhancement: raw.hand2.enhancement
      },

      missile: raw.missile,
      armour: raw.armour,
      missileMisc: raw.missileMisc,

      miscItems: [raw.misc1, raw.misc2].filter(
        (item): item is StandaloneMiscDefinition => item !== null
      ),

      traits: [raw.trait1, raw.trait2, raw.trait3, raw.trait4].filter(
        (trait): trait is Trait => trait !== null
      )
    };
  }

}






