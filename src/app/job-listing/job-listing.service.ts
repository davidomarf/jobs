import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from './offer/offer.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobListingService {
  private readonly path = './';

  constructor(private readonly http: HttpClient) {}

  public getOffers$(): Observable<JobOffer> {
    return this.http.get<JobOffer>(this.path);
  }
}
