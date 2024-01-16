import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySearchComponent } from './family-search.component';

describe('FamilySearchComponent', () => {
  let component: FamilySearchComponent;
  let fixture: ComponentFixture<FamilySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilySearchComponent]
    });
    fixture = TestBed.createComponent(FamilySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
