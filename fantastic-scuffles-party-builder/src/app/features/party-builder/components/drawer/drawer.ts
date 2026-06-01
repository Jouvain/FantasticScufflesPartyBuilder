import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  imports: [ReactiveFormsModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer {
  isOpen = input<boolean>(false);
  profile = new FormControl('');

}
