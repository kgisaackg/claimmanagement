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
    this.afs.doc('users/' + ClaimantId).update(Claimant);
  }

  deleteClaimant(ClaimantId: string){
    this.afs.doc('users/' + ClaimantId).delete();
  }

 /* getById(docId: string): any{
    return this.afs.collection('users').doc(docId)
    .valueChanges().subscribe(item => {return item})
  }

  get(docId: string){
    this.afs.collection('users').doc(docId).get().subscribe(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }*/

}
