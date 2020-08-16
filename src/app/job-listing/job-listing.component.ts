import { Component, OnInit } from '@angular/core';

import { JobListingService } from './job-listing.service';
import { JobOffer } from './offer/offer.component';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent implements OnInit {
  public offers: JobOffer[] = [];

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
