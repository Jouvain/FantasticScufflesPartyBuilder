import { Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  imports: [],
  templateUrl: './btn-action.html',
  styleUrl: './btn-action.less',
})
export class BtnAction {
  label = input.required<string>();
  icon = input.required<string>();
  variant = input(false);
}
