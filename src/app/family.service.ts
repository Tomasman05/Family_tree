import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, throwError,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiUrl = 'http://localhost:3000';
  private familyMembers: any[] = [];
  private updateSuccessSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getFamilyMembers(): Observable<any[]> {
    const url = `${this.apiUrl}/familytree`;
    return this.http.get<any[]>(url);
  }
  getUpdateSuccessObservable(): Observable<void> {
    return this.updateSuccessSubject.asObservable();
  }

  getFamilyMemberById(id: number): Observable<any> {
    const url = `${this.apiUrl}/familytree/${id}`;
    return this.http.get<any>(url);
  }

  updateFamilyMember(updatedMember: any): Observable<any> {
    console.log('Updating family member:', updatedMember);
    const url = `${this.apiUrl}/familytree/${updatedMember.id}`;

    return this.http.put<any>(url, updatedMember).pipe(
      catchError((error) => {
        console.error('Error updating family member:', error);
        throw error; 
      }),
      tap(() => this.updateSuccessSubject.next())
    );
  }

  getFamilyMemberByIdFromLocal(id: number): Observable<any> {
    const selectedMember = this.familyMembers.find(member => member.id === id);
    return selectedMember ? of(selectedMember) : throwError('Family member not found');
  }

  getFamilyMemberByName(name: string): Observable<any> {
    const selectedMember = this.familyMembers.find(member => member.name === name);
    return selectedMember ? of(selectedMember) : throwError('Family member not found');
  }
  triggerUpdateSuccess() {
    this.updateSuccessSubject.next();
  }
}
