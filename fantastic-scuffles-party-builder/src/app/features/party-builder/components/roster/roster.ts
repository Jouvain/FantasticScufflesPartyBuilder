import { Component } from '@angular/core';
import { UnitCard } from "../unit-card/unit-card";

@Component({
  selector: 'app-roster',
  imports: [UnitCard],
  templateUrl: './roster.html',
  styleUrl: './roster.less',
})
export class Roster {}
