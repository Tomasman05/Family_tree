import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFamilyComponent } from './modify-family.component';

describe('ModifyFamilyComponent', () => {
  let component: ModifyFamilyComponent;
  let fixture: ComponentFixture<ModifyFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyFamilyComponent]
    });
    fixture = TestBed.createComponent(ModifyFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
