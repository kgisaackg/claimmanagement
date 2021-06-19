import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-pending-claims-ds',
  templateUrl: './pending-claims-ds.component.html',
  styleUrls: ['./pending-claims-ds.component.scss']
})
export class PendingClaimsDsComponent implements OnInit {
  
  claims: any[];
  claim: Claim;

  search: String;
   
  constructor(public claimService: ClaimService) { }

  ngOnInit(): void {
    this.getPendingClaims();
  }

  getPendingClaims(){
    this.claimService.isLoading.next(true);
    this.claimService.getAllPendingClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
      this.claimService.isLoading.next(false);
    })
  }

}
