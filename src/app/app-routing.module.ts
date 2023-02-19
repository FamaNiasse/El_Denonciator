import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TirageComponent } from './pages/tirage/tirage.component';
import { AbsentsComponent } from './pages/absents/absents.component';
import { RouterModule, Routes } from '@angular/router';





const routes:Routes = [

  {
    path:"",component:TirageComponent

  },

  {
    path:"absents",component:AbsentsComponent

  },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
