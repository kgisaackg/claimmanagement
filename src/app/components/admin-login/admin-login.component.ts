import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService,
     public loader: LoaderService) { }

  ngOnInit(): void {
  }

  errorMessage = false;

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
    role: ['admin']
  })

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password,
      this.loginForm.value.role);
  }
}
