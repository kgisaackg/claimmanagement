import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.scss']
})
export class EditClaimComponent implements OnInit {

  claim: Claim;

  constructor(private fb: FormBuilder, private cs: ClaimService, private as: AuthService,
     private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  claimForm = this.fb.group({
    message: [],
    title: []
  })

  today = this.datePipe.transform(Date.now(),"dd-MMMM-YYYY");
  submitClaim(){
    
    this.claim ={
      id: null,
      claimantId: this.as.currentUserId(),
      claimDate: this.today,
      title: this.claimForm.value.title,
      message: this.claimForm.value.message,
      status: "pending"
    }

    this.cs.createClaim(this.claim);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Claim has been sent');
  }

}
