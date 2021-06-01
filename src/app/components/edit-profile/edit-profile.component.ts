import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimerService } from 'src/app/services/claimer.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: any;

  constructor(private fb: FormBuilder, private claimerService:
    ClaimerService, private authS: AuthService) { }

  ngOnInit(): void {
    this.claimerService.getClaimant(this.authS.currentUserId())
    .subscribe(doc => this.user = doc.data());
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

  onUpdate(fname: string, lname: string, phone: string, emailAddress: string){

    if(this.updateForm.value.firstname == ""){
      this.updateForm.value.firstname = fname;
    }

    if(this.updateForm.value.phoneNumber == ""){
      this.updateForm.value.phoneNumber = phone;
    }

    if(this.updateForm.value.lastname == ""){
      this.updateForm.value.lastname = lname;
    }

    if(this.updateForm.value.emailAddress == ""){
      this.updateForm.value.emailAddress = emailAddress;
    }



    const user = {
      id: this.authS.currentUserId(),
      firstname: this.updateForm.value.firstname, 
      lastname: this.updateForm.value.lastname,
      phoneNumber: this.updateForm.value.phoneNumber, 
      email: this.updateForm.value.emailAddress
    }

    console.log(user);

    this.claimerService.updateClaimant(user);
  }

}
