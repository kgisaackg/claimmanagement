import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  errorMessage = false;

  emailForm = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
  })

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService, public loader: LoaderService) { }

  ngOnInit(): void {
  }

  get emailAddress() { return this.emailForm.get('emailAddress')}

  onSubmit(){
    console.log(this.emailForm.value.emailAddress);
    this.authService.resetLink(this.emailForm.value.emailAddress);
  }

}
