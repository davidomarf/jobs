import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() public readonly company = '';
  @Input() public readonly flags = { isNew: false, isFeatured: false };
  @Input() public readonly position = '';
  @Input() public readonly meta: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
