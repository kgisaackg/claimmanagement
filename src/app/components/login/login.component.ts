import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
}
