import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-finalized-claims',
  templateUrl: './finalized-claims.component.html',
  styleUrls: ['./finalized-claims.component.scss']
})
export class FinalizedClaimsComponent implements OnInit {

  claims: any[];
  claim: Claim;
  
  constructor(private claimService: ClaimService, public loader: LoaderService) { }

  ngOnInit(): void {
    this.getConcludedClaims();
  }

  getConcludedClaims(){
    this.loader.isLoading.next(true);
    this.claimService.getFinilisedClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
      this.loader.isLoading.next(false);
    })
  }

}
