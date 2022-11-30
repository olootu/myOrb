import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as env from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyorbService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(`${env.environment.baseAPIUrl}`);
  }
}
