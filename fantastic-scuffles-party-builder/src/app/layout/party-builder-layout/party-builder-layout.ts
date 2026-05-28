import { Component } from '@angular/core';
import { Header } from "../../features/party-builder/components/header/header";
import { PartyOverview } from "../../features/party-builder/components/party-overview/party-overview";
import { Constraints } from "../../features/party-builder/components/constraints/constraints";
import { Roster } from "../../features/party-builder/components/roster/roster";
import { Drawer } from "../../features/party-builder/components/drawer/drawer";

@Component({
  selector: 'app-party-builder-layout',
  imports: [Header, PartyOverview, Constraints, Roster, Drawer],
  templateUrl: './party-builder-layout.html',
  styleUrl: './party-builder-layout.less',
})
export class PartyBuilderLayout {}
