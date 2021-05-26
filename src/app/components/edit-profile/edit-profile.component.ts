import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = {
      firstname: "Isaac", lastname: "Malebana", phoneNumber: "063 4242 1342", emailAddress: "user@gmail.com"
    }
  }

  updateForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    phoneNumber: [''],
    emailAddress: ['']
  });

  get firstname() { return this.updateForm.get('firstname')}

  get lastname() { return this.updateForm.get('lastname')}

  get phoneNumber() { return this.updateForm.get('phoneNumber')}

  get emailAddress() { return this.updateForm.get('emailAddress')}

}
