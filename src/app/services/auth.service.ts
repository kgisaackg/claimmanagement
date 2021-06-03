import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userState = null;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,
    private afs: AngularFirestore) { 

    this.afAuth.authState.subscribe(user => {
      if (user){
        //this.userState = user.delete;
        let userAcc = afAuth.currentUser;
        
        localStorage.setItem('userId', user.uid);
      } else {
        localStorage.setItem('user', "null");
      }
    });

  }

  deleteUser(){
    console.log(this.afAuth.currentUser);
    this.afAuth.currentUser.then(auth => auth.delete());
  }

  currentUserId(): string {
    return localStorage.getItem('userId');
  }

  login(email: string, password: string) {
  
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then((value:any)  => {
      console.log('Nice, it worked!');
      //the beloow is uid
      console.log(value.user.uid);
      console.log(value.user.X.X);
      localStorage.setItem('userId', value.user.X.X);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err:any) => {
      console.log('Something went wrong: ', err.message);
      alert(err.message);
     
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
      console.log(value.user.X.X);
      console.log(value.user.uid);
      localStorage.setItem('userId', value.user.X.X);
     this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
      alert(error.message);
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
