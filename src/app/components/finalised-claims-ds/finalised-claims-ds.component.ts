import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-finalised-claims-ds',
  templateUrl: './finalised-claims-ds.component.html',
  styleUrls: ['./finalised-claims-ds.component.scss']
})
export class FinalisedClaimsDsComponent implements OnInit {

  claims: any[];
  claim: Claim;
  
  search : string;
  
  constructor(public loader: LoaderService, private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getAllFinilisedClaims();
  }

  getAllFinilisedClaims(){
    this.loader.isLoading.next(true);
    this.claimService.getAllFinilisedClaims().subscribe(res =>{
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
