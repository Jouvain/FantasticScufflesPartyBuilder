import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { UnitCard } from "../unit-card/unit-card";
import { PartyStore } from '../../services/party-store';

@Component({
  selector: 'app-roster',
  imports: [UnitCard],
  templateUrl: './roster.html',
  styleUrl: './roster.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roster {
  public readonly partyStore: PartyStore = inject(PartyStore);
}
