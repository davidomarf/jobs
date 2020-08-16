import { Component, OnInit } from '@angular/core';
import { JobOffer } from '@models';

import { JobListingService } from './job-listing.service';

@Component({
  selector: 'app-job-listing',
  styleUrls: ['./job-listing.component.scss'],
  template: `
    <div class="job-listing-container">
      <app-filter
        *ngIf="filters.length > 0"
        [filters]="filters"
        (filtersChange)="updateFilters($event)"
      ></app-filter>
      <app-offer
        *ngFor="let offer of offers"
        [offer]="offer"
        [filters]="filters"
        (filtersChange)="updateFilters($event)"
      ></app-offer>
    </div>
  `,
})
export class JobListingComponent implements OnInit {
  private allOffers: JobOffer[] = [];
  public offers: JobOffer[] = [];
  public filters: string[] = [];

  constructor(private readonly jobListingService: JobListingService) {}

  ngOnInit(): void {
    this.jobListingService.getOffers$().subscribe((data) => {
      this.allOffers = data.map((offer) => ({
        ...offer,
        logo: offer.logo.replace('.', 'assets'),
      }));

      this.offers = [...this.allOffers];
    });
  }

  public updateFilters(filters: string[]) {
    // First update the filters independently of its value
    this.filters = filters;

    // When the filters are empty, reset the visible offers
    // using the complete offers list.
    if (filters.length === 0) {
      this.offers = [...this.allOffers];
      return;
    }

    this.offers = this.allOffers.filter((offer) =>
      this.doesOfferMatchesFilter(offer, filters)
    );
  }

  private doesOfferMatchesFilter(offer: JobOffer, filters: string[]) {
    // This contains all the strings that can be compared against the filter
    const keywords: string[] = [
      ...offer.languages,
      ...offer.tools,
      offer.role,
      offer.level,
    ];

    return filters.every((filter) => keywords.includes(filter));
  }
}
