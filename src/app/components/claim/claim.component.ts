import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';
import { ToastrService } from 'ngx-toastr';

import {AngularFireStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: Claim;

  constructor(private fb: FormBuilder, private cs: ClaimService, private as: AuthService,
     private datePipe: DatePipe, private toastr: ToastrService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  claimForm = this.fb.group({
    message: ['', [Validators.required]],
    title: ['', [Validators.required]],
    validationImage: ['', [Validators.required]]
  })

  get validationImage() { return this.claimForm.get('validationImage')}

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
    this.claimForm.reset();
    
  }

  showSuccess() {
    this.toastr.success('Claim has been sent');
  }


  //for file upload 
  filePath:String
  upload(event) {    
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
  }

}
