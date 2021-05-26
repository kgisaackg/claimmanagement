import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = {
      firstname: "Isaac", lastname: "Malebana", phoneNumber: "063 4242 1342", emailAddress: "user@gmail.com"
    }
  }

  edit(){
    this.router.navigate(['/editprofile'])
  }

  logOut(){
    console.log("---For logout ----")
  }

  deleteAccount(){

  }

}
