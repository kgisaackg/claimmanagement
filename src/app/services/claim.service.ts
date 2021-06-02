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

  getClaim(claimId: string){
    return this.afs.collection('claim').doc(claimId).get();
  }

  createClaim(claim: Claim){
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
