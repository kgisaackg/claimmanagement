import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userState = null;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,
    private afs: AngularFirestore) { 

    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userState = user.delete;
        localStorage.setItem('userId', user.uid);
      } else {
        localStorage.setItem('user', "null");
      }
    });

  }

  deleteUser(){
    return this.userState;
  }

  currentUserId(): string {
    return localStorage.getItem('userId');
  }

  login(email: string, password: string) {
  
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then((value:any)  => {
      console.log('Nice, it worked!');
      console.log(value);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err:any) => {
      console.log('Something went wrong: ', err.message);
    });
  }

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem("userId");
  }
  
  emailSignup(firstname: string, lastname: string, phoneNumber: string,
                 email: string, password: string) {
                   
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((value: any) => {
      console.log(value);
     const user = {
       firstname, 
       lastname,
       phoneNumber,
       email,
       uid: value.user.uid
     }
     
     this.registerUser(user);
     this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  

  registerUser(user: any){
    const userRef: AngularFirestoreDocument = this.afs.doc(`users/${user.uid}`);

    return userRef.set(user, {
      merge: true
    });
  }


  getUsers() { 
    return this.afs.collection("users").snapshotChanges();
  }

}
