import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss'],
})
export class TargetComponent {
  @Input() showBottomRow: boolean = true;
}
