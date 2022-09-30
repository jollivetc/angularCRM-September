import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerListComponent } from './consumer/consumer-list/consumer-list.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './login/authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthenticationGuard]},
  {path:'consumers', component:ConsumerListComponent, canActivate:[AuthenticationGuard]},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
