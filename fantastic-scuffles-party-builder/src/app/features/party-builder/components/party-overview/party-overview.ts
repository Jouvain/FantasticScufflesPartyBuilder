import { Component } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";


@Component({
  selector: 'app-party-overview',
  imports: [BtnAction],
  templateUrl: './party-overview.html',
  styleUrl: './party-overview.less',
})
export class PartyOverview {}
