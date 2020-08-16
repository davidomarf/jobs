import { Component, Input, OnInit } from '@angular/core';
import { JobOffer, Flags } from '@models';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() public readonly offer!: JobOffer;

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
}
