import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  baseUrl = 'http://localhost:8000/api/people';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(person: Person): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, person);
  }

  update(id: string, person: Person): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/`, person);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}/`);
  }
}
