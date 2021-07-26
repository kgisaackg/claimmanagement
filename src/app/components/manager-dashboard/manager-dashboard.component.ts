import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { Claim } from 'src/app/types/claim';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  actions = ["Pending", "Approved", "Rejected"]
  claims: any[];
  claim: Claim;

  search : string;


  constructor(private router: Router, private claimService: ClaimService,private datePipe: DatePipe,
   private authS: AuthService, private toastr: ToastrService,  public loader: LoaderService) { }

  ngOnInit(): void {
    this.getPendingClaims();
  }

  getPendingClaims(){
    this.loader.isLoading.next(true);
    this.claimService.getAllPendingClaims().subscribe(res =>{
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

  saves(status: string, claim: Claim){
    claim.status = status;
    this.claimService.updateClaim(claim);
    console.log(status);
    this.statusApproved();
  }


save(status: string, claim: Claim){
    claim.status = status;
    const theid = claim.id;
    this.claimService.updateClaim(claim);

    let futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    let payDate = this.datePipe.transform((futureDate),"dd-MMMM-YYYY");

    if(status !== "Pending"){
      payDate = (status === "Approved") ? payDate : "N/A";
      const insurer = {
          paymentMethod: "Electronic bank transfers",
          payDate: payDate,
          claimId: theid
      }
      this.claimService.createInsurer(insurer);
      console.log(theid);
    }

    console.log(status);
    this.statusApproved();
  }

  statusApproved() {
    this.toastr.success('status has been submited');
  }

  logOut(){
    //for this user
    this.authS.logout("manager");
    this.router.navigateByUrl('/login');
  }
}
