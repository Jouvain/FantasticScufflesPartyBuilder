import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { UnitCard } from "../unit-card/unit-card";

@Component({
  selector: 'app-roster',
  imports: [UnitCard],
  templateUrl: './roster.html',
  styleUrl: './roster.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roster {
  
}
