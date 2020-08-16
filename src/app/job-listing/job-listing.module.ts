import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { JobListingComponent } from './job-listing.component';
import { FlagsComponent } from './offer/info/flags/flags.component';
import { InfoComponent } from './offer/info/info.component';
import { OfferComponent } from './offer/offer.component';
import { TagsComponent } from './offer/tags/tags.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    JobListingComponent,
    OfferComponent,
    TagsComponent,
    InfoComponent,
    FlagsComponent,
    FilterComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
