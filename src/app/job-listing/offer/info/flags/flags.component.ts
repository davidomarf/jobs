import { Component, Input } from '@angular/core';
import { Flags } from '../../offer.component';

@Component({
  selector: 'app-flags',
  styleUrls: ['./flags.component.scss'],
  template: `
    <div class="flags" *ngIf="flags.isNew || flags.isFeatured">
      <div class="flag new" *ngIf="flags.isNew">
        New!
      </div>
      <div class="flag featured" *ngIf="flags.isFeatured">
        Featured
      </div>
    </div>
  `,
})
export class FlagsComponent {
  @Input() public readonly flags!: Flags;
}
