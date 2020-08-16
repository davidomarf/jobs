import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing.component';
import { OfferComponent } from './offer/offer.component';
import { TagsComponent } from './offer/tags/tags.component';
import { InfoComponent } from './offer/info/info.component';
import { FlagsComponent } from './offer/info/flags/flags.component';

@NgModule({
  declarations: [
    JobListingComponent,
    OfferComponent,
    TagsComponent,
    InfoComponent,
    FlagsComponent,
  ],
  imports: [CommonModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
