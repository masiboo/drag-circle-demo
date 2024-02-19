import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CircleInfo } from '../model/circle-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  insertCirclePosition(circleInfo: CircleInfo): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/insert/circleInfo`, circleInfo);
  }
}
