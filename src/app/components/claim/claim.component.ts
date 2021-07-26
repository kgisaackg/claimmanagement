import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';
import { ToastrService } from 'ngx-toastr';

import {AngularFireStorage} from '@angular/fire/storage'
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: Claim;

  constructor(private fb: FormBuilder, private cs: ClaimService, private as: AuthService, public loader: LoaderService,
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

  //for file upload 
  filePath:String
  upload(event) {    
    this.filePath = event.target.files[0]
  }

   //method to upload file at firebase storage
  url = null;

  async uploadFile() {
    console.log(" This is for upload file")
    const fileName = '/pdf' + Math.random()+this.filePath;
    const snap = await this.afStorage.upload(fileName, this.filePath);
    this.getUrl(snap);
  }

  //method to retrieve download url
  async getUrl(snap: any) {
    console.log("This is in get urld")
    this.url = await snap.ref.getDownloadURL()
    this.claim.claimDoc = this.url;
    this.cs.createClaim(this.claim);
    console.log(this.claim);
  }
  
  submitClaim(){
    console.log("This has been submited")
    //this.uploadImage();
    this.loader.isLoading.next(true);
    this.claim = {
      id: null,
      claimantId: this.as.currentUserId(),
      empId: "gUb33T0Tev9pS8HOWsEh",
      claimDate: this.today,
      title: this.claimForm.value.title,
      message: this.claimForm.value.message,
      status: "Pending",
      claimDoc: ""
    }

    this.uploadFile().then(() => {
      this.loader.isLoading.next(false);
      this.claimForm.reset();
      this.toastr.success('Claim has been sent');
    })
  
    /*this.cs.createClaim(this.claim).then(() => {
      
    });*/

    
  }

}
