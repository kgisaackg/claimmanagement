import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ClaimComponent } from './components/claim/claim.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {DatePipe} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditClaimComponent } from './components/edit-claim/edit-claim.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FinalizedClaimsComponent } from './components/finalized-claims/finalized-claims.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSaFe25xHlvxstpA8Evs8CzIv85hn648k",
  authDomain: "authentication-15cfc.firebaseapp.com",
  projectId: "authentication-15cfc",
  storageBucket: "authentication-15cfc.appspot.com",
  messagingSenderId: "106161072750",
  appId: "1:106161072750:web:c9cc5fa5694a5673cf547f",
  measurementId: "G-MM6Q9BLRJX"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    EditProfileComponent,
    ClaimComponent,
    PageNotFoundComponent,
    HeaderComponent,
    EditClaimComponent,
    FinalizedClaimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule, 
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [DatePipe, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
