import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Claim } from "../types/claim";
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  url = "https://formspree.io/f/mvodajbv";

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afs: AngularFirestore, private http: HttpClient) { }

  sendEmail(){
    const customerData = "Hello Isaac malebana";
    return this.http.post(this.url, customerData);
  }


  getClaims() {
    return this.afs.collection('claims').snapshotChanges();
  }

  getPendingClaims(){
    return this.afs.collection('claims',
     ref => ref.where("status", "==", "pending")
     .where("claimantId", "==", localStorage.getItem('userId'))).snapshotChanges();
  }

  getFinilisedClaims(){
    return this.afs.collection('claims',
     ref => ref.where("status", "!=", "pending")
     .where("claimantId", "==", localStorage.getItem('userId'))).snapshotChanges();
  }

  getClaim(claimId: string){
    return this.afs.collection('claim').doc(claimId).get();
  }

  createClaim(claim: Claim){
    delete claim.id;
    return this.afs.collection('claims').add(claim);
  }

  updateClaim(claim: Claim){
    console.log(claim);
    const id = claim.id;
    delete claim.id;
    this.afs.doc('claims/' + id).update(claim);
  }

  deleteClaim(claimId: string){
    this.afs.doc('claims/' + claimId).delete();
  }
}
