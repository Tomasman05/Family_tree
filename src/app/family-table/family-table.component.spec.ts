import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTableComponent } from './family-table.component';

describe('FamilyTableComponent', () => {
  let component: FamilyTableComponent;
  let fixture: ComponentFixture<FamilyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyTableComponent]
    });
    fixture = TestBed.createComponent(FamilyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
