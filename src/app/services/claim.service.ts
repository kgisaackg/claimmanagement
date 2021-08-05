import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Claim } from "../types/claim";
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  url = "http://localhost:5000/email";

  formSpree = "https://formspree.io/f/myylpnbl";
  //formSpree = ""; 

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afs: AngularFirestore, private http: HttpClient) { }

  postEmail(smessage: Claim, id: String, actionType: String){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    console.log("-----------Start---------------");

    let theMessage = "Hello, \nClaim from eClaims\n\nDeleted\nId#: " + id;

    if("Create" === actionType){
      theMessage = "Hello, \nClaim from eClaims\n\nCreate\nId#: " + id +"\nTitle: " + smessage.title + "\nMessage: " 
          + smessage.message + "\n\nDocument Link " + smessage.claimDoc;
    }else if("Update" === actionType){
      theMessage = "Hello, \nClaim from eClaims\n\nUpdate\nId#: " + id +"\nTitle: " + smessage.title + "\nMessage: " 
          + smessage.message + "\n\nDocument Link " + smessage.claimDoc;
    }
    
    console.log(theMessage);
    console.log("---------------End-----------------")

    return this.http.post(this.formSpree, { email: "isaackagiso7@gmail.com",
    message: theMessage}, httpOptions);
    
  }

  sendEmail(claim: Claim){
    console.log("This has been sent")
    const customerData = "Hello Isaac malebana";
    return this.http.post(this.url, claim);
  }

  getClaims() {
    return this.afs.collection('claim').snapshotChanges();
  }

  //for specific user
  getPendingClaims(){
    return this.afs.collection('claim',
     ref => ref.where("status", "==", "Pending")
     .where("claimantId", "==", localStorage.getItem('userId'))).snapshotChanges();
  }

  //for all user
  getAllPendingClaims(){
    return this.afs.collection('claim',
     ref => ref.where("status", "==", "Pending")).snapshotChanges();
  }

  getAllFinilisedClaims(){
    return this.afs.collection('claim',
     ref => ref.where("status", "!=", "Pending")).snapshotChanges();
  }

  getFinilisedClaims(){
    return this.afs.collection('claim',
     ref => ref.where("status", "!=", "Pending")
     .where("claimantId", "==", localStorage.getItem('userId'))).snapshotChanges();
  }

  getClaim(claimId: string){
    return this.afs.collection('claim').doc(claimId).get();
  }

  createClaim(claim: Claim){
    console.log("Creating a claim now--");
    delete claim.id;
    return this.afs.collection('claim').add(claim).then((value: any) => {
      console.log("The message has been sent On Create Claim");
      this.postEmail(claim, value.id, "Create").subscribe(d => console.log(d), e => console.log(e));
    })
    //return this.sendEmail(claim).subscribe(d => console.log(d), e => console.log(e));
  }

  updateClaim(claim: Claim){
    console.log(claim);
    const id = claim.id;
    delete claim.id;
    return this.afs.doc('claim/' + id).update(claim).then(() =>{
      console.log("Inside update then");
      this.postEmail(claim, id,"Update").subscribe(d => console.log(d), e => console.log(e));
    });
  }

  createInsurer(insurer: any){
    return this.afs.collection('insurer').add(insurer).then(() => {
      console.log("Insurance message has been sent");
      //this.postEmail(claim).subscribe(d => console.log(d), e => console.log(e));
    })
  }

  getInsurer(claimId: string){
    return this.afs.collection('insurer',
    ref => ref.where("claimId", "==", claimId)).snapshotChanges();
  }

  deleteClaim(claimId: string){
    return this.afs.doc('claim/' + claimId).delete().then(() =>{
      console.log("Inside delete then");
      const claim = null;
      this.postEmail(claim, claimId, "Delete").subscribe(d => console.log(d), e => console.log(e));
    });
  }
}
