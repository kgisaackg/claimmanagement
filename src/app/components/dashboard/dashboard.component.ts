import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from "../../types/claim"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  claims: any[];
  showClaim = false;
  constructor( private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  showAddClaim(){
    this.showClaim = !this.showClaim;
  }

  logOut(){
    console.log("Have logged out");
  }

  getClaims(){
    this.claimService.getClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          claimId: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
    })
  }

  editClaim(id: string){
    console.log(id);
  }

  deleteClaim(id: string){
    this.claimService.deleteClaim(id);
  }

}
