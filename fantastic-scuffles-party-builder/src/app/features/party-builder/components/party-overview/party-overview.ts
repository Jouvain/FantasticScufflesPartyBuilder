import { Component, inject } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";
import { DrawerStore } from '../../services/drawer-store';


@Component({
  selector: 'app-party-overview',
  imports: [BtnAction],
  templateUrl: './party-overview.html',
  styleUrl: './party-overview.less',
})
export class PartyOverview {
  private readonly drawerStore = inject(DrawerStore);

  createProfile(): void {
    this.drawerStore.open();
  }
}
