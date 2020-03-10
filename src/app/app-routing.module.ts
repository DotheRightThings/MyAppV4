import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundfactsheetComponent } from './fundfactsheet/fundfactsheet.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: '' , component:HomepageComponent},
  { path: 'fund-factsheet', component: FundfactsheetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
