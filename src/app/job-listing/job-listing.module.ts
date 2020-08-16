import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [JobListingComponent, OfferComponent],
  imports: [CommonModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
