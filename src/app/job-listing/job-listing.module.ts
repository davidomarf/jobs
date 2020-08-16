import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing.component';
import { OfferComponent } from './offer/offer.component';
import { TagsComponent } from './offer/tags/tags.component';

@NgModule({
  declarations: [JobListingComponent, OfferComponent, TagsComponent],
  imports: [CommonModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
