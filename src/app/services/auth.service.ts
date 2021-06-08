import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { LoginComponent } from '../components/login/login.component';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public msg: BehaviorSubject<string> = new BehaviorSubject<string>("msg");
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  userState = null;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,
    private afs: AngularFirestore, private loaderService: LoaderService) { 

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

  login(email: string, password: string, role: string) {
  
    this.loaderService.isLoading.next(true);

    this.afAuth.signInWithEmailAndPassword(email, password)
    .then((value:any)  => {
      if(role == "user"){
        localStorage.setItem('userId', value.user.X.X);
        this.router.navigateByUrl('/dashboard');
      }else{
        localStorage.setItem('managerId', value.user.X.X);
        this.router.navigateByUrl('/manager');
      }
      this.loaderService.isLoading.next(false);
    })
    .catch((err:any) => {
      this.loaderService.isLoading.next(false);
      console.log('Something went wrong: ', err.message);
      this.isError.next(true);
      this.msg.next(err.message)
      alert(err.message);
     
    });
  }

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem("userId");
  }
  
  emailSignup(firstname: string, lastname: string, phoneNumber: string,
                 email: string, password: string) {
     
   this.loaderService.isLoading.next(true);
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
      this.loaderService.isLoading.next(false);
      localStorage.setItem('userId', value.user.X.X);
      this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      this.loaderService.isLoading.next(false);
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
