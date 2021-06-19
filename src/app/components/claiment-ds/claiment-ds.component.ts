import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { ClaimerService } from 'src/app/services/claimer.service';

@Component({
  selector: 'app-claiment-ds',
  templateUrl: './claiment-ds.component.html',
  styleUrls: ['./claiment-ds.component.scss']
})
export class ClaimentDsComponent implements OnInit {

  users: any[];
  
  search: String;

  constructor(public claimService: ClaimService, private claimerService:
    ClaimerService) { }

  ngOnInit(): void {

      this.claimService.isLoading.next(true);
      this.claimerService.getClaiments().subscribe(res =>{
        this.users = res.map ( (document)=>{
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as any
          }
        });
        console.log ("Data received >> ",this.users);
        this.claimService.isLoading.next(false);
      })
  }

}
