import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { passwordMatchValidator } from '../../validation/passwordMatchValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isEmailError = false;

  // don't forget to look for this struck through
  userForm = this.fb.group({ 
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    emailAddress: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('(((0[6-8]))([0-9]{8}))')]],//^(((0[6-8]))([0-9]{8})) OR ((\\+27))[6-8][0-9]{8}
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}')]],
    confirmPassword: ['',  Validators.required]
  },{validator: passwordMatchValidator}) 

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, public loader: LoaderService) { }

  ngOnInit(): void {
  }

  get firstname() { return this.userForm.get('firstname')}

  get lastname() { return this.userForm.get('lastname')}

  get phoneNumber() { return this.userForm.get('phoneNumber')}

  get emailAddress() { return this.userForm.get('emailAddress')}

  get password() { return this.userForm.get('password')}

  get confirmPassword() { return this.userForm.get('confirmPassword')}

  onSubmit(){
    this.authService.emailSignup(this.userForm.value.firstname, this.userForm.value.lastname,
      this.userForm.value.phoneNumber, this.userForm.value.emailAddress, this.userForm.value.password);
  }
}
