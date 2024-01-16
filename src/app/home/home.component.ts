import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  familyMembers: any[] = [];
  filteredFamilyMembers: any[] = [];
  noResults: boolean = false;

  constructor(private familyService: FamilyService) { }

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

    console.log('Search Text:', searchText);
    console.log('Search Option:', searchOption);

    this.filteredFamilyMembers = this.familyMembers.filter(member => {
      const valueToSearch = member[searchOption];
      return valueToSearch && typeof valueToSearch === 'string' && valueToSearch.toLowerCase().includes(searchText);
    });

    console.log('Filtered Family Members:', this.filteredFamilyMembers);
    this.updateNoResults();
  }

  private updateNoResults() {
    this.noResults = this.filteredFamilyMembers.length === 0;
  }
}

