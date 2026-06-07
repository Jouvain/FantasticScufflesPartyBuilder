import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { BtnAction } from "../btn-action/btn-action";
import { DrawerStore } from '../../services/drawer-store';


@Component({
  selector: 'app-unit-card',
  imports: [BtnAction],
  templateUrl: './unit-card.html',
  styleUrl: './unit-card.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitCard {
  private readonly drawerStore = inject(DrawerStore);
  
  public edit(): void {
    this.drawerStore.open();
  }
}
