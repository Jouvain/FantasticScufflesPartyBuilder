import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { UnitCard } from "../unit-card/unit-card";
import { PartyStore } from '../../services/party-store';
import { DrawerStore } from '../../services/drawer-store';

@Component({
  selector: 'app-roster',
  imports: [UnitCard],
  templateUrl: './roster.html',
  styleUrl: './roster.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roster {
  public readonly partyStore: PartyStore = inject(PartyStore);
  public readonly drawerStore: DrawerStore = inject(DrawerStore);
  cursorIsEnabled = computed(() => this.drawerStore.isOpen());
}
