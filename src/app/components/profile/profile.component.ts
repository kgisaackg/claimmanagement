import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimerService } from 'src/app/services/claimer.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private router: Router, private claimerService:
     ClaimerService, private authS: AuthService, public loader: LoaderService) { }

  ngOnInit(): void {
    console.log(this.authS.currentUserId);
    this.getClaimant();
  }

  getClaimant(){
    this.loader.isLoading.next(true);
    this.claimerService.getClaimant(this.authS.currentUserId())
    .subscribe(doc => {
      this.user = doc.data()
      this.loader.isLoading.next(false)}
    );
  }
  edit(){
    this.router.navigate(['/editprofile'])
  }

  logOut(){
    this.authS.logout();
  }

  deleteAccount(){
    console.log("Delete has been called")
    this.claimerService.deleteClaimant(this.authS.currentUserId());
    this.authS.deleteUser();
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
