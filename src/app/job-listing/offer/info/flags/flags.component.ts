import { Component, Input } from '@angular/core';

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
  @Input() flags: any = {};
  constructor() {}
}
