import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from "../../features/party-builder/components/header/header";
import { PartyOverview } from "../../features/party-builder/components/party-overview/party-overview";
import { Constraints } from "../../features/party-builder/components/constraints/constraints";
import { Roster } from "../../features/party-builder/components/roster/roster";
import { Drawer } from "../../features/party-builder/components/drawer/drawer";
import { DrawerStore } from '../../features/party-builder/services/drawer-store';
import { PartyStore } from '../../features/party-builder/services/party-store';

@Component({
  selector: 'app-party-builder-layout',
  imports: [Header, PartyOverview, Constraints, Roster, Drawer],
  templateUrl: './party-builder-layout.html',
  styleUrl: './party-builder-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DrawerStore, PartyStore]
})
export class PartyBuilderLayout {

}
