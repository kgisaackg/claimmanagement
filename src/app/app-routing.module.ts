import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './components/claim/claim.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ClaimantTableComponent } from './components/claimant-table/claimant-table.component';
import { ClaimaTableComponent } from './components/claima-table/claima-table.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "editprofile", component: EditProfileComponent},
  {path: "claim", component: ClaimComponent},
  {path: "claimantTable", component: ClaimantTableComponent},
  {path: "claimTable", component: ClaimaTableComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
