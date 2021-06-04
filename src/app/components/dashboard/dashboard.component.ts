import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  constructor(private fb: FormBuilder, private claimService: ClaimService,
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
    console.log('----------------------------');
    this.claimService.getPendingClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
    })
  }

  //the bellow has to be moved to the admin
  getClaims(){
    this.claimService.getClaims().subscribe(res =>{
      this.claims = res.map ( (document)=>{
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as Claim
        }
      });
      console.log ("Data received >> ",this.claims);
    })
  }

  today = this.datePipe.transform(Date.now(),"dd-MMMM-YYYY");
  editSpecifClaim(updateClaim: Claim){
    
    console.log(updateClaim);
      //to change values of non updated inputs
    if(this.claimForm.value.title == ""){
      this.claimForm.value.title = updateClaim.title;
    }

    if(this.claimForm.value.messsage == ""){
      this.claimForm.value.message = updateClaim.message;
    }

    this.claim ={
      id: this.updateClaim.id,
      claimantId: this.as.currentUserId(),
      claimDate: this.updateClaim.claimDate,
      title: this.claimForm.value.title,
      message: this.claimForm.value.message,
      status: "pending" 
    }


    this.claimService.updateClaim(this.claim);
    this.showSuccess();
    this.showContent = 1;
  }

  showSuccess() {
    this.toastr.success('Claim has been updated');
  }

  updateClaim: Claim;
  editClaim(claim: Claim){
    this.updateClaim = claim;
    this.showContent = 2;
  }

  deleteClaim(id: string){
    this.claimService.deleteClaim(id);
  }

  closeContent(){
    this.showContent = 1;
  }
}
