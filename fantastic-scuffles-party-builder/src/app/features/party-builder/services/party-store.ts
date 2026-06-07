import { computed, Injectable, signal } from '@angular/core';
import { ProfileDefinition } from '../../../models/profile-definition';

@Injectable()
export class PartyStore {
  profiles = signal<ProfileDefinition[]>([]);

  totalCost = computed(() =>
    this.profiles().reduce((sum, profile) => sum + profile.cost, 0)
  );

  profileCount = computed(() =>
    this.profiles().length
  );

  characterCount = computed(() =>
    this.profiles().filter(profile => profile.isCharacter).length
  );

  validationState = computed(() => ({
    budgetOk: this.totalCost() <= 100,
    profilesOk: this.profileCount() <= 9,
    characterOk: this.characterCount() >= 1,
  }));

  public addProfile(profile: ProfileDefinition): void {
    this.profiles.update((profiles) => [...profiles, profile]);
  }

}
