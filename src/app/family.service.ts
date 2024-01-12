import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getFamilyMembers(): Observable<any> {
    const url = `${this.apiUrl}/familytree`;
    return this.http.get(url);
  }
}

