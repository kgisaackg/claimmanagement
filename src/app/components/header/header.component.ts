import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimerService } from 'src/app/services/claimer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private router: Router, private claimerService:
    ClaimerService, private authS: AuthService) { }

  ngOnInit(): void {
   console.log(this.authS.currentUserId);
   this.claimerService.getClaimant(this.authS.currentUserId())
   .subscribe(doc => { 
    this.user = doc.data(); 
    });
  }

  logOut(){
    this.authS.logout();
    this.router.navigateByUrl('/login');
  }
}
