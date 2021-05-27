import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showClaim = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAddClaim(){
    this.showClaim = !this.showClaim;
  }

  logOut(){
    console.log("Have logged out");
  }
}
