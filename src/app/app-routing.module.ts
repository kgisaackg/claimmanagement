import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './components/claim/claim.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FinalizedClaimsComponent } from './components/finalized-claims/finalized-claims.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ActiveClaimantGuard } from './guards/active-claimant.guard';
import { CanAcitivateManagerGuard } from './guards/can-acitivate-manager.guard';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent, canActivate: [ActiveClaimantGuard]},
  {path: "editprofile", component: EditProfileComponent, canActivate: [ActiveClaimantGuard]},
  {path: "claim", component: ClaimComponent, canActivate: [ActiveClaimantGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate: [ActiveClaimantGuard]},
  {path: "finalisedclaim", component: FinalizedClaimsComponent, canActivate: [ActiveClaimantGuard]},
  {path: "manager", component: ManagerDashboardComponent, canActivate: [CanAcitivateManagerGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
