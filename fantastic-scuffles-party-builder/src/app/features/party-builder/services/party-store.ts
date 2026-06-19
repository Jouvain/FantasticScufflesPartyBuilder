import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { ProfileDefinition } from '../../../models/profile-definition';

@Injectable()
export class PartyStore {
  profiles = signal<ProfileDefinition[]>([]);
  budget: WritableSignal<number> = signal<number>(150);
  maxProfiles: number = 9;
  minCharacters: number = 1;
  partyName: WritableSignal<string> = signal("Party name");

  //#region COMPUTED

  totalCost = computed(() =>
    this.profiles().reduce((sum, profile) => sum + profile.cost * profile.quantity, 0)
  );

  profileCount = computed(() =>
    this.profiles().length
  );

  characterCount = computed(() =>
    this.profiles().filter(profile => profile.isCharacter).length
  );

  validationState = computed(() => ({
    budgetOk: this.totalCost() <= this.budget(),
    profilesOk: this.profileCount() <= this.maxProfiles,
    characterOk: this.characterCount() >= this.minCharacters,
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

  public setBudget(value: number): void {
    this.budget.set(value);
  }

  public setPartyName(value: string): void {
    this.partyName.set(value);
  }

private getNextProfileId(profiles: ProfileDefinition[]): number {
  return Math.max(0, ...profiles.map(profile => profile.id)) + 1;
}

  //#endregion





}
