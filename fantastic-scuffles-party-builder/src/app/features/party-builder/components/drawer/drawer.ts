import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, input, output } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Archetype } from '../../../../types/archetype';
import { Size } from '../../../../types/size';
import { MeleeWeaponDefinition } from '../../../../models/melee-weapon-definition';
import { MissileWeaponDefinition } from '../../../../models/missile-weapon-definition';
import { MiscDefinition } from '../../../../models/misc-definition';
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
import { deriveIsCharacter } from '../../rules/profile-derivation-rules';
import { deriveQuantity } from '../../rules/profile-derivation-rules';
import { deriveBaseStats } from '../../rules/profile-derivation-rules';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type ProfileForm = {
  id: FormControl<number>;
  nom: FormControl<string>;
  archetype: FormControl<Archetype>;
  size: FormControl<Size>;
  isCharacter: FormControl<boolean>;
  stats: FormGroup<StatBlockForm>;
  hand1: FormControl<MeleeWeaponDefinition>;
  hand2: FormControl<MeleeWeaponDefinition>;
  missile: FormControl<MissileWeaponDefinition>;
  armour: FormControl<ArmorDefinition>;
  misc1: FormControl<MiscDefinition>;
  misc2: FormControl<MiscDefinition>;
  trait1: FormControl<Trait | null>;
  trait2: FormControl<Trait | null>;
  trait3: FormControl<Trait | null>;
  trait4: FormControl<Trait | null>;
  cost: FormControl<number>;
}

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


const defaultHand1 = MELEE_WEAPONS.find((weapon) => weapon.id === "Axe") ?? MELEE_WEAPONS[0];
const defaultHand2 = MELEE_WEAPONS.find((weapon) => weapon.id === "Axe") ?? MELEE_WEAPONS[0];
const defaultMissile = MISSILE_WEAPONS.find((missile) => missile.id === "Arquebus") ?? MISSILE_WEAPONS[0];
const defaultArmour = ARMORS.find((armour) => armour.id === "Light armour") ?? ARMORS[0];
const defaultMisc1 = MISC.find((misc) => misc.id === "Talisman") ?? MISC[0];
const defaultMisc2 = MISC.find((misc) => misc.id === "Talisman") ?? MISC[0];


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
  profileSaved = output<ProfileDefinition>();

  meleeWeapons = MELEE_WEAPONS;
  missileWeapons = MISSILE_WEAPONS;
  armors = ARMORS;
  miscItems = MISC;
  traits = TRAITS;

  archetypes: Archetype[] = ['warrior', 'sage', 'rogue', 'minion'];
  sizes: Size[] = ['small', 'average', 'large', 'huge'];

  profileForm: FormGroup<ProfileForm> = this.createProfileForm();

  constructor() {
    effect(() => {
      this.profileForm = this.createProfileForm(this.drawerStore.profile());
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

    if(!newProfile) {
      return;
    }

    if(this.drawerStore.profile()) {
      this.partyStore.updateProfile(newProfile);
    } else {
      this.partyStore.addProfile(newProfile);
    }

    this.profileForm.reset();
    this.drawerStore.close();
    console.log(newProfile);
  }

  public cancel(): void {
    console.log("test");
    this.drawerStore.close();
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
      hand1: new FormControl(profile?.hand1 ?? defaultHand1, {
        nonNullable: true
      }),
      hand2: new FormControl(profile?.hand2 ?? defaultHand2, {
        nonNullable: true
      }),
      missile: new FormControl(profile?.missile ?? defaultMissile, {
        nonNullable: true
      }),
      armour: new FormControl(profile?.armour ?? defaultArmour, {
        nonNullable: true
      }),
      misc1: new FormControl(profile?.misc1 ?? defaultMisc1, {
        nonNullable: true
      }),
      misc2: new FormControl(profile?.misc2 ?? defaultMisc2, {
        nonNullable: true
      }),
      trait1: new FormControl(profile?.trait1 ?? null),
      trait2: new FormControl(profile?.trait2 ?? null),
      trait3: new FormControl(profile?.trait3 ?? null),
      trait4: new FormControl(profile?.trait4 ?? null),
      cost: new FormControl(profile?.cost ?? 0, {
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


  private toProfileDefinition(): ProfileDefinition | null {
    const raw = this.profileForm.getRawValue();
    const existing = this.drawerStore.profile();

    if (!raw.hand1 || !raw.hand2 || !raw.missile || !raw.misc1 || !raw.misc2) {
      return null;
    }

    return {
      id: raw.id,
      nom: raw.nom,
      archetype: raw.archetype,
      size: raw.size,
      isCharacter: deriveIsCharacter(raw.archetype),
      stats: raw.stats,
      hand1: raw.hand1,
      hand2: raw.hand2,
      missile: raw.missile,
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
    this.profileForm.controls.archetype.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((archetype) => {
      const baseStats = deriveBaseStats(archetype);
      this.profileForm.controls.stats.patchValue(baseStats, {emitEvent: false});
    });
  }

}






