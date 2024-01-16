// modify-family.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-modify-family',
  templateUrl: './modify-family.component.html',
  styleUrls: ['./modify-family.component.css']
})
export class ModifyFamilyComponent implements OnInit {
  @Input() familyMembers: any[] = [];
  familyMemberForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private familyService: FamilyService) {
    this.familyMemberForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      date: [''],
      address: [''],
      mothers_name: [''],
      fathers_name: [''],
      possible_death_time: [''],
      possible_death_location: ['']
    });
  }

  ngOnInit() {
    this.watchNameChanges();
  }

  watchNameChanges() {
    const idControl = this.familyMemberForm.get('id');
    const nameControl = this.familyMemberForm.get('name');

    if (idControl && nameControl) {
      let isProgrammaticChange = false;

      nameControl.valueChanges.subscribe((name: string) => {
        if (!isProgrammaticChange) {
          const selectedMember = this.familyMembers.find(member => member.name === name);

          if (selectedMember) {
            const selectedId = selectedMember.id;
            idControl.setValue(selectedId);
            this.loadFamilyMemberDataById(selectedId);
          } else {
            console.error('Error: Family member not found');
          }
        }
      });

      idControl.valueChanges.subscribe(() => {
        isProgrammaticChange = true;

        setTimeout(() => {
          isProgrammaticChange = false;
        });
      });
    }
  }

  loadFamilyMemberDataByName(name: string) {
    console.log('Trying to load family member with name:', name);
  
    this.familyService.getFamilyMemberByName(name).subscribe(
      selectedMember => {
        console.log('Selected family member:', selectedMember);
  
        this.familyMemberForm.patchValue({
          id: selectedMember.id,
          name: selectedMember.name,
          date: selectedMember.date,
          address: selectedMember.address,
          mothers_name: selectedMember.mothers_name,
          fathers_name: selectedMember.fathers_name,
          possible_death_time: selectedMember.possible_death_time,
          possible_death_location: selectedMember.possible_death_location
        });
      },
      error => {
        console.error('Error loading family member:', error);
      }
    );
  }
  loadFamilyMemberDataById(id: number) {
    console.log('Trying to load family member with ID:', id);
  
    this.familyService.getFamilyMemberById(id).subscribe(
      selectedMember => {
        console.log('Selected family member:', selectedMember);
  
        this.familyMemberForm.patchValue({
          id: selectedMember.id,
          name: selectedMember.name,
          date: selectedMember.date,
          address: selectedMember.address,
          mothers_name: selectedMember.mothers_name,
          fathers_name: selectedMember.fathers_name,
          possible_death_time: selectedMember.possible_death_time,
          possible_death_location: selectedMember.possible_death_location
        });
      },
      error => {
        console.error('Error loading family member:', error);
      }
    );
  }

  onNameSelected(event: any) {
    const selectedName = event.target.value;
    
    const selectedMember = this.familyMembers.find(member => member.name === selectedName);
  
    if (selectedMember) {
      const selectedId = selectedMember.id;
      this.loadFamilyMemberDataById(selectedId);
    } else {
      console.error('Error: Family member not found');
    }
  }

  onSubmit() {
    const modifiedData = this.familyMemberForm.value;
    this.familyService.updateFamilyMember(modifiedData).subscribe(
      response => {
        console.log('Update successful:', response);
  

        this.familyService.getFamilyMembers().subscribe(
          updatedFamilyMembers => {
            this.familyMembers = updatedFamilyMembers;
            console.log('Updated family members array:', this.familyMembers);
            window.location.reload()
          },
          error => {
            console.error('Error fetching updated family members:', error);
          }
        );
      },
      error => {
        console.error('Error updating family member:', error);
      }
    );
  }
}
