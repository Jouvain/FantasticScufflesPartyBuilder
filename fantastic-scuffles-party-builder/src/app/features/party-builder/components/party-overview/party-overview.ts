import { Component, inject } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";
import { DrawerStore } from '../../services/drawer-store';
import { PartyStore } from '../../services/party-store';


@Component({
  selector: 'app-party-overview',
  imports: [BtnAction],
  templateUrl: './party-overview.html',
  styleUrl: './party-overview.less',
})
export class PartyOverview {
  private readonly drawerStore = inject(DrawerStore);
  public readonly partyStore = inject(PartyStore);

  createProfile(): void {
    this.drawerStore.openForCreate();
  }
}
