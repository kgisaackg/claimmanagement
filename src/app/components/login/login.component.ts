import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = false;

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
    role: ['user']
  })

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password,
      this.loginForm.value.role);
  }

}
