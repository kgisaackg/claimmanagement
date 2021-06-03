import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClaimerService {

  constructor(private afs: AngularFirestore) { }

  getClaimant(claimantId: string){
    return this.afs.collection('users').doc(claimantId).get();
  }

  createClaimant(claimant: any){
    return this.afs.collection('users').add(claimant);
  }

  updateClaimant(Claimant: any){
    console.log(Claimant);
    const ClaimantId =  Claimant.id
    delete Claimant.id;
    this.afs.doc('users/' + ClaimantId).update(Claimant)
    .then(() => {
      //to make sure the displayed values will update on the view 
      location.reload();
    });
  }

  deleteClaimant(ClaimantId: string){
    this.afs.doc('users/' + ClaimantId).delete();
  }

}
