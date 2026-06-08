import { computed, Injectable, signal } from '@angular/core';
import { ProfileDefinition } from '../../../models/profile-definition';

@Injectable()
export class PartyStore {
  profiles = signal<ProfileDefinition[]>([]);


  //#region COMPUTED

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

  //#endregion

  //#region METHODS

  public addProfile(profile: ProfileDefinition): void {
    this.profiles.update((profiles) => [...profiles, {...profile, id: this.getNextProfileId(profiles)}]);
  }

  public updateProfile(profile: ProfileDefinition): void {
    this.profiles.update((profiles) =>
      profiles.map((currentProfile) =>
        currentProfile.id === profile.id ? profile : currentProfile
      )
    );
  }

  public removeProfile(profileId: number): void {
    this.profiles.update((profiles) =>
      profiles.filter((profile) => profile.id !== profileId)
    );
  }

private getNextProfileId(profiles: ProfileDefinition[]): number {
  return Math.max(0, ...profiles.map(profile => profile.id)) + 1;
}

  //#endregion





}
