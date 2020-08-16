import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing.component';
import { OfferComponent } from './offer/offer.component';
import { TagsComponent } from './offer/tags/tags.component';
import { InfoComponent } from './offer/info/info.component';

@NgModule({
  declarations: [
    JobListingComponent,
    OfferComponent,
    TagsComponent,
    InfoComponent,
  ],
  imports: [CommonModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
