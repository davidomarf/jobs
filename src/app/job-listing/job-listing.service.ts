import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

import { JobOffer } from '@models';

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
