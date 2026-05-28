import { Component } from '@angular/core';
import { PartyStats } from "../party-stats/party-stats";
import { PartyControls } from "../party-controls/party-controls";

@Component({
  selector: 'app-party-overview',
  imports: [PartyStats, PartyControls],
  templateUrl: './party-overview.html',
  styleUrl: './party-overview.less',
})
export class PartyOverview {}
