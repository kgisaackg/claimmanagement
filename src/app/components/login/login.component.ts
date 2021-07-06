import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['',  Validators.required],
    role: ['user']
  })

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService, 
    public loader: LoaderService) { }

  ngOnInit(): void {
   
  }

  get emailAddress() { return this.loginForm.get('emailAddress')}

  get password() { return this.loginForm.get('password')}

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password,
      this.loginForm.value.role);
  }

}
