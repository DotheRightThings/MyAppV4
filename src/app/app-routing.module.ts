import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundfactsheetComponent } from './fundfactsheet/fundfactsheet.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AccCreationComponent } from './acc-creation/acc-creation.component';


const routes: Routes = [
  { path: 'fund-factsheet', component: FundfactsheetComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'acc-creation', component: AccCreationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
