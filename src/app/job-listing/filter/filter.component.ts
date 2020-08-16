import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  styleUrls: ['./filter.component.scss'],
  template: `
    <div class="filters">
      <div *ngFor="let filter of filters; let i = index" class="filter">
        {{ filter }}
        <span class="remove-button" (click)="remove(i)">
          <img src="assets/images/icon-remove.svg" />
        </span>
      </div>
      <span class="clear-button" (click)="clear()">
        Clear
      </span>
    </div>
  `,
})
export class FilterComponent {
  @Input() public filters: string[] = [];
  @Output() public readonly filtersChange = new EventEmitter<string[]>();

  public remove(index: number) {
    this.filters.splice(index, 1);
    this.filtersChange.emit(this.filters);
  }

  public clear() {
    this.filtersChange.emit([]);
  }
}
