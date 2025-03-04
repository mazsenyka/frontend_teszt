import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'http://127.0.0.1:8000/api/animals/cats'; // Laravel API

  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
