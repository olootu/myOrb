import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyorbService {
  url = 'https://terms.myorb.com:9000/browser/MAIN/descriptions?term=';
  urlSegmemts = '&sematicTags=procedure&active=true&conceptActive=true&lang=english&limit=200&offset=0&groupByConcept=true';

  constructor(private http: HttpClient) { }

  getSnomeCT(term: any): Observable<any> {
    return this.http.get(`${this.url}${term}${this.urlSegmemts}`);
  }
}
