import { Component, OnInit } from '@angular/core';
import { JobOffer } from '@models';

import { JobListingService } from './job-listing.service';

@Component({
  selector: 'app-job-listing',
  styleUrls: ['./job-listing.component.scss'],
  template: `
    <div class="job-listing-container">
      <app-filter *ngIf="filters.length > 0" [(filters)]="filters"></app-filter>
      <app-offer
        *ngFor="let offer of offers"
        [offer]="offer"
        [(filters)]="filters"
      ></app-offer>
    </div>
  `,
})
export class JobListingComponent implements OnInit {
  public offers: JobOffer[] = [];
  public filters: string[] = [];

  constructor(private readonly jobListingService: JobListingService) {}

  ngOnInit(): void {
    this.jobListingService.getOffers$().subscribe((data) => {
      this.offers = data.map((offer) => ({
        ...offer,
        logo: offer.logo.replace('.', 'assets'),
      }));
    });
  }
}
