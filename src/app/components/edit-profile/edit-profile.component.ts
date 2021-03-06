import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimerService } from 'src/app/services/claimer.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: any;

  constructor(private fb: FormBuilder, private claimerService:
    ClaimerService, private authS: AuthService, private toastr: ToastrService,
    public loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.isLoading.next(true);
    this.claimerService.getClaimant(this.authS.currentUserId())
    .subscribe(doc => {
      this.user = doc.data()
      this.loader.isLoading.next(false);
    });
  }

  updateForm = this.fb.group({
    firstname: ['', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    phoneNumber: ['', Validators.pattern('(((0[6-8]))([0-9]{8}))')],//((0[6-8]))[0-9]{8}|((\\+27))[6-8][0-9]{8}
  });

  get firstname() { return this.updateForm.get('firstname')}

  get lastname() { return this.updateForm.get('lastname')}

  get phoneNumber() { return this.updateForm.get('phoneNumber')}

  onUpdate(fname: string, lname: string, phone: string, emailAddress: string){

    this.loader.isLoading.next(true);

    if(this.updateForm.value.firstname == ""){
      this.updateForm.value.firstname = fname;
    }

    if(this.updateForm.value.phoneNumber == ""){
      this.updateForm.value.phoneNumber = phone;
    }

    if(this.updateForm.value.lastname == ""){
      this.updateForm.value.lastname = lname;
    }


    const user = {
      id: this.authS.currentUserId(),
      firstname: this.updateForm.value.firstname, 
      lastname: this.updateForm.value.lastname,
      phoneNumber: this.updateForm.value.phoneNumber, 
      email: emailAddress
    }
    console.log(user);
    
    this.claimerService.updateClaimant(user).then(() =>{
      this.loader.isLoading.next(false);
      this.showSuccess();
    })
  }

  showSuccess() {
    this.toastr.success('User has been updated');
  }
}
