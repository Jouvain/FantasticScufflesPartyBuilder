import { Component, inject } from '@angular/core';
import { PartyStore } from '../../services/party-store';

@Component({
  selector: 'app-constraints',
  imports: [],
  templateUrl: './constraints.html',
  styleUrl: './constraints.less',
})
export class Constraints {
  public readonly partyStore: PartyStore = inject(PartyStore);
}
