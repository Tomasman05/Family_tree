import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiUrl = 'http://localhost:3000';
  private familyMembers: any[] = [];

  constructor(private http: HttpClient) {}

  getFamilyMembers(): Observable<any[]> {
    const url = `${this.apiUrl}/familytree`;
    return this.http.get<any[]>(url);
  }

  updateFamilyMember(updatedMember: any): Observable<any[]> {
    const index = this.familyMembers.findIndex(member => member.name === updatedMember.name);

    if (index !== -1) {
      this.familyMembers[index] = { ...this.familyMembers[index], ...updatedMember };
    }
    return of(this.familyMembers);
  }
}

