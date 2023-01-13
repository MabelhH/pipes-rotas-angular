import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MostarComponent } from './pages/mostar/mostar.component';

const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'mostar/:id',component:MostarComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
