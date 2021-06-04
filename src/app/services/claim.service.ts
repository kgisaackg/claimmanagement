import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Claim } from "../types/claim"

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private afs: AngularFirestore) { }

  getClaims() {
    return this.afs.collection('claims').snapshotChanges();
  }

  getPendingClaims(){
    return this.afs.collection('claims',
     ref => ref.where("status", "==", "pending")).snapshotChanges();
  }

  getFinilisedClaims(){
    return this.afs.collection('claims',
     ref => ref.where("status", "!=", "pending")).snapshotChanges();
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
