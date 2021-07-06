import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

import { passwordMatchValidator } from '../../validation/passwordMatchValidator';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  errorMessage = false;

  emailResetForm = this.fb.group({
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}')]],
    confirmPassword: ['',  Validators.required]
  },{validator: passwordMatchValidator}) 

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService, 
    public loader: LoaderService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  
  get password() { return this.emailResetForm.get('password')}
  
  get confirmPassword() { return this.emailResetForm.get('confirmPassword')}
  
  onSubmit(){
    const code = this.route.snapshot.queryParams['oobCode'];
    this.authService.resetPassword(code, this.emailResetForm.value.password);
  }

}
