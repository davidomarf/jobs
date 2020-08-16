import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  styleUrls: ['./info.component.scss'],
  template: `
    <div class="main">
      <div class="header">
        <p class="company">
          {{ company }}
        </p>
        <app-flags [flags]="flags"></app-flags>
      </div>
      <p class="position">{{ position }}</p>
      <div class="meta">
        <span *ngFor="let item of meta">{{ item }}</span>
      </div>
    </div>
  `,
})
export class InfoComponent implements OnInit {
  @Input() public readonly company = '';
  @Input() public readonly flags = { isNew: false, isFeatured: false };
  @Input() public readonly position = '';
  @Input() public readonly meta: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
