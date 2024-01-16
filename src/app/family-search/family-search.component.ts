import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-family-search',
  templateUrl: './family-search.component.html',
  styleUrls: ['./family-search.component.css']
})
export class FamilySearchComponent {
  @Output() searchEvent = new EventEmitter<{ searchText: string, searchOption: string }>();
  searchText: string = '';
  selectedOption: string = 'nev';

  search() {
    this.searchEvent.emit({ searchText: this.searchText, searchOption: this.selectedOption });
  }
}
