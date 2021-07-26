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
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FinalizedClaimsComponent } from './components/finalized-claims/finalized-claims.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { ClaimentDsComponent } from './components/claiment-ds/claiment-ds.component';
import { PendingClaimsDsComponent } from './components/pending-claims-ds/pending-claims-ds.component';
import { FinalisedClaimsDsComponent } from './components/finalised-claims-ds/finalised-claims-ds.component';
import { StatsDsComponent } from './components/stats-ds/stats-ds.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8RCit8US0nBiO7qP4c2WOIwUIht-ylrE",
  authDomain: "eclaim-21.firebaseapp.com",
  projectId: "eclaim-21",
  storageBucket: "eclaim-21.appspot.com",
  messagingSenderId: "402158322494",
  appId: "1:402158322494:web:38a1b75e4331233324226f",
  measurementId: "G-6H20R2DNBS"
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
    FinalizedClaimsComponent,
    ManagerDashboardComponent,
    AdminComponent,
    ClaimentDsComponent,
    PendingClaimsDsComponent,
    FinalisedClaimsDsComponent,
    StatsDsComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
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
    ToastrModule.forRoot({
      timeOut: 1500,
      preventDuplicates: true
    }),
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [DatePipe, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
