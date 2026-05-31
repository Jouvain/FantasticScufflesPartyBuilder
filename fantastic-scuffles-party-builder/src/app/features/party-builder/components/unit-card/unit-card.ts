import { Component } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";


@Component({
  selector: 'app-unit-card',
  imports: [BtnAction],
  templateUrl: './unit-card.html',
  styleUrl: './unit-card.less',
})
export class UnitCard {}
