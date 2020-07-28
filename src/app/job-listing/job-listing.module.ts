import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing.component';

@NgModule({
  declarations: [JobListingComponent],
  imports: [CommonModule],
  exports: [JobListingComponent],
})
export class JobListingModule {}
