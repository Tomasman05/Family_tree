import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-family-table',
  templateUrl: './family-table.component.html',
  styleUrls: ['./family-table.component.css']
})
export class FamilyTableComponent {
  @Input() dataSource: any[] =[];
  displayedColumns: string[] = ['nev', "date", "address", 'anyjaNeve', 'apjaNeve',"lehetsegesHalalIdopont","lehetsegesHalalHely"];
}
