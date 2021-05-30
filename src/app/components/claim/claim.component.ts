import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: Claim;

  constructor(private fb: FormBuilder, private cs: ClaimService, private as: AuthService,
     private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  claimForm = this.fb.group({
    message: []
  })

  today = this.datePipe.transform(Date.now(),"dd-MMMM-YYYY");
  submitClaim(){
    
    this.claim ={
      id: this.as.currentUserId(),
      claimDate: this.today,
      message: this.claimForm.value.message,
      claimerId: ""
    }

    this.cs.createClaim(this.claim);
    
  }
  

}
