import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimerService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private afs: AngularFirestore, private loaderService: LoaderService) { }

  getClaimant(claimantId: string){
    return this.afs.collection('claiment').doc(claimantId).get();
  }

  getClaiments() {
    return this.afs.collection('claiment').snapshotChanges();
  }

  createClaimant(claimant: any){
    return this.afs.collection('claiment').add(claimant);
  }

  updateClaimant(Claimant: any){
    this.loaderService.isLoading.next(true);
    const ClaimantId =  Claimant.id
    delete Claimant.id;

    return this.afs.doc('claiment/' + ClaimantId).update(Claimant)
    .then(() => this.loaderService.isLoading.next(false));
  }

  deleteClaimant(ClaimantId: string){
    return this.afs.doc('claiment/' + ClaimantId).delete()
    .then();
  }

}
