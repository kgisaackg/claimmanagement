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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTxR1qEkn6qOvqiRZbhnHZbRB-XSzBxsc",
  authDomain: "eclaim-70eeb.firebaseapp.com",
  projectId: "eclaim-70eeb",
  storageBucket: "eclaim-70eeb.appspot.com",
  messagingSenderId: "403851855149",
  appId: "1:403851855149:web:c5790f359faf582cfcffa4",
  measurementId: "G-J61LRVDZFB"
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
    AdminLoginComponent
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
