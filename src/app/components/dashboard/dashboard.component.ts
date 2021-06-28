import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from "../../types/claim"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  claims: any[];
  claim: Claim;
  showContent = 1;

  showClaim = false;
  constructor(private fb: FormBuilder, public claimService: ClaimService, private afStorage: AngularFireStorage,
    private as: AuthService, private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
   // this.getClaims();
    this.getPendingClaims();
  }

  claimForm = this.fb.group({
    message: [''],
    title: ['']
  })

  showAddClaim(){
    this.showClaim = !this.showClaim;
  }

  logOut(){
    console.log("Have logged out");
  }

  getPendingClaims(){
    this.claimService.isLoading.next(true);
    this.claimService.getPendingClaims().subscribe(res =>{
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

 // today = this.datePipe.transform(Date.now(),"dd-MMMM-YYYY");

 filePath: String;
  upload(event) {    
    this.filePath = event.target.files[0];
    console.log(this.filePath);
  }

  url = null;

  async uploadFile() {
    const fileName = '/pdf' + Math.random()+this.filePath;
    const snap = await this.afStorage.upload(fileName, this.filePath);
    this.getUrl(snap);
  }

  //method to retrieve download url
  async getUrl(snap: any) {
    this.url = await snap.ref.getDownloadURL()
    this.claim.claimDoc = this.url;
    
    //updated
    this.claimService.updateClaim(this.claim).then(() =>{
      this.toastr.success('Claim has been updated');
      this.claimService.isLoading.next(false);
      this.claimForm.reset();
      setTimeout(() => {this.showContent = 1;}, 1500);
    });
    //have to be updated with 

    console.log(this.claim);
  }
  
  editSpecifClaim(updateClaim: Claim){

    this.claimService.isLoading.next(true);

    //to change values of non updated inputs
    if(this.claimForm.value.title == "" || this.claimForm.value.title == undefined){
      this.claimForm.value.title = updateClaim.title;
    }

    if(this.claimForm.value.messsage == "" || this.claimForm.value.messsage == undefined){
      this.claimForm.value.message = updateClaim.message;
    }

    console.log(this.claim);

    this.claim = {
      id: this.updateClaim.id,
      claimantId: this.as.currentUserId(),
      claimDate: this.updateClaim.claimDate,
      title: this.claimForm.value.title,
      message: this.claimForm.value.message,
      status: "Pending",
      claimDoc: this.updateClaim.claimDoc
    }

    if(this.filePath == undefined){
      this.claimService.updateClaim(this.claim).then(() =>{
        this.toastr.success('Claim has been updated');
        this.claimService.isLoading.next(false);
        this.claimForm.reset();
        setTimeout(() => {this.showContent = 1;}, 1500);
      });
    }else{
      this.uploadFile();
    }

  }

  updateClaim: Claim;

  editClaim(claim: Claim){
    this.updateClaim = claim;
    this.showContent = 2;
  }

  deleteClaim(id: string){
    this.claimService.deleteClaim(id).then( () => {
      this.toastr.success('Claim has been deleted');
    });
  }

  closeContent(){
    this.showContent = 1;
  }
}
