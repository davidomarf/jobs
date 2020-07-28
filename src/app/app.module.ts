import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobListingModule } from './job-listing/job-listing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, JobListingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
