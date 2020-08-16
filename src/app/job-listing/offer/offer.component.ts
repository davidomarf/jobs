import { Component, Input, OnInit } from '@angular/core';

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

type JobOffer = {
  id: number;
  company: string;
  logo: string;

  new: boolean;
  featured: boolean;

  position: string;
  role: string;
  level: string;

  postedAt: string;
  contract: string;
  location: string;

  languages: string[];
  tools: string[];
};

export type Flags = {
  isNew: boolean;
  isFeatured: boolean;
};
