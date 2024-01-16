import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-family',
  templateUrl: './modify-family.component.html',
  styleUrls: ['./modify-family.component.css']
})
export class ModifyFamilyComponent {
  @Input() familyMember: any; // Input property for the family member data
  @Output() saveChanges = new EventEmitter<any>(); // Event emitter to save changes

  familyMemberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.familyMemberForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      address: ['', Validators.required],
      mothers_name: ['', Validators.required],
      fathers_name: ['', Validators.required],
      possible_death_time: ['', Validators.required],
      possible_death_location: ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.familyMember) {
      this.familyMemberForm.patchValue(this.familyMember);
    }
  }

  onSubmit() {
    if (this.familyMemberForm.valid) {
      const modifiedData = this.familyMemberForm.value;
      this.saveChanges.emit(modifiedData);
    }
  }
}