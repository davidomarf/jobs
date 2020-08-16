import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() public readonly offer: JobOffer = {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'FullStack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  };

  public tags: string[] = [];
  public meta: string[] = [];

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
    } = this.offer;
    this.tags = [role, level, ...tools, ...languages];
    this.meta = [postedAt, contract, location];
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
