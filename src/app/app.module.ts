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
import { ClaimantTableComponent } from './components/claimant-table/claimant-table.component';
import { ClaimaTableComponent } from './components/claima-table/claima-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

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
    ClaimantTableComponent,
    ClaimaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
