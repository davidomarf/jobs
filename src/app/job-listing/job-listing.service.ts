import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from './offer/offer.component';
import { Observable } from 'rxjs';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class JobListingService {
  private readonly path = environment.OFFERS_URL;

  constructor(private readonly http: HttpClient) {}

  public getOffers$(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.path);
  }
}
