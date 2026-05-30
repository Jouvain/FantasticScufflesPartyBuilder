import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  imports: [],
  templateUrl: './btn-action.html',
  styleUrl: './btn-action.less',
})
export class BtnAction {
  @Input() label: string = "Label";
}
