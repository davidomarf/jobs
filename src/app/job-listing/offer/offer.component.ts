import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flags, JobOffer } from '@models';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() public readonly offer!: JobOffer;
  @Input() public readonly filters: string[] = [];

  @Output() private readonly filtersChange = new EventEmitter<string[]>();

  public tags: string[] = [];
  public meta: string[] = [];
  public flags!: Flags;

  constructor() {}

  ngOnInit(): void {
    const {
      role,
      level,
      tools,
      languages,
      contract,
      postedAt,
      location,
      new: isNew,
      featured: isFeatured,
    } = this.offer;

    this.flags = { isNew, isFeatured };
    this.meta = [postedAt, contract, location];
    this.tags = [role, level, ...tools, ...languages];
  }

  public addFilter(filter: string) {
    if (!this.filters.includes(filter)) {
      this.filtersChange.emit([...this.filters, filter]);
    }
  }
}
