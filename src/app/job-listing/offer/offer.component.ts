import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() offer: JobOffer = {} as JobOffer;

  constructor() {}

  ngOnInit(): void {}
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
}
