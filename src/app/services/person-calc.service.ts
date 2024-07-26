import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonCalcService {

  baseUrl = 'http://localhost:8000/api/person-calc';

  constructor(private http: HttpClient) { }

  calc(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/`);
  }
}
