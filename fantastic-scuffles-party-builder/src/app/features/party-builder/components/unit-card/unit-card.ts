import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";
import { DrawerStore } from '../../services/drawer-store';
import { PartyStore } from '../../services/party-store';
import { ProfileDefinition } from '../../../../models/profile-definition';


@Component({
  selector: 'app-unit-card',
  imports: [BtnAction],
  templateUrl: './unit-card.html',
  styleUrl: './unit-card.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitCard {
  private readonly drawerStore = inject(DrawerStore);
  public readonly partyStore = inject(PartyStore);
  profile = input<ProfileDefinition>();
  
  public edit(): void {
    this.drawerStore.openForEdit(this.profile()!);
  }

  public delete(profileId: number | undefined): void {
    if(!profileId) {
      return;
    }
    this.partyStore.removeProfile(profileId);
  }
}
