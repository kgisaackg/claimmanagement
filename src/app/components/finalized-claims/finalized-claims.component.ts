import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-finalized-claims',
  templateUrl: './finalized-claims.component.html',
  styleUrls: ['./finalized-claims.component.scss']
})
export class FinalizedClaimsComponent implements OnInit {

  claims: any[];
  claim: Claim;
  
  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getConcludedClaims();
  }

  getConcludedClaims(){
    this.claimService.getFinilisedClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
    })
  }

}
