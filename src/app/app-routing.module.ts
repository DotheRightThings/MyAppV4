import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundfactsheetComponent } from './fundfactsheet/fundfactsheet.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '' , component:HomepageComponent},
  { path: 'fund-factsheet', component: FundfactsheetComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
