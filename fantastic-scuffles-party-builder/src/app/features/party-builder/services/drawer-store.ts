import { Injectable, signal } from '@angular/core';
import { ProfileDefinition } from '../../../models/profile-definition';

@Injectable()
export class DrawerStore {
  private readonly _isOpen = signal(false);
  private readonly _profile = signal<ProfileDefinition | null>(null);

  public readonly isOpen = this._isOpen.asReadonly();
  public readonly profile = this._profile.asReadonly();

  public openForCreate(): void {
    this._profile.set(null);
    this._isOpen.set(true);
  }
  public openForEdit(profile: ProfileDefinition): void {
    this._profile.set(profile);
    this._isOpen.set(true);
  }

  public close(): void {
    this._profile.set(null);
    this._isOpen.set(false);
  }
}
