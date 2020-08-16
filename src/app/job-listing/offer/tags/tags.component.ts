import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  styleUrls: ['./tags.component.scss'],
  template: `
    <div class="tags">
      <div *ngFor="let tag of tags" class="tag" (click)="addFilter.emit(tag)">
        {{ tag }}
      </div>
    </div>
  `,
})
export class TagsComponent {
  @Input() public readonly tags: string[] = [];
  @Output() public readonly addFilter = new EventEmitter<string>();
}
