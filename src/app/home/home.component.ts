import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  familyMembers: any[] = [];
  filteredFamilyMembers: any[] = [];
  noResults: boolean = false;
  selectedMemberForModification: any;

  constructor(private familyService: FamilyService, private router:Router) {}

  ngOnInit() {
    this.familyService.getFamilyMembers().subscribe(
      (data: any[]) => {
        this.familyMembers = data;
        this.filteredFamilyMembers = data;
        this.updateNoResults();
      },
      (error) => {
        console.error('Error fetching family members:', error);
      }
    );
  }

  performSearch({ searchText, searchOption }: { searchText: string, searchOption: string }) {
    searchText = searchText.toLowerCase();

    this.filteredFamilyMembers = this.familyMembers.filter(member => {
      const valueToSearch = member[searchOption];
      return valueToSearch && typeof valueToSearch === 'string' && valueToSearch.toLowerCase().includes(searchText);
    });

    this.updateNoResults();
  }

  updateNoResults() {
    this.noResults = this.filteredFamilyMembers.length === 0;
  }

  handleModifyClick(member: any) {
    this.selectedMemberForModification = member;
  }


  updateFamilyMemberData(updatedMember: any) {
    const index = this.familyMembers.findIndex(member => member.name === updatedMember.name);

    if (index !== -1) {
      this.familyMembers[index] = { ...this.familyMembers[index], ...updatedMember };
      this.filteredFamilyMembers = [...this.familyMembers];
      this.updateNoResults();
    }

    this.selectedMemberForModification = null;
  }
  navigateToModification() {
    this.router.navigate(['/modify-family']);
  }
}
