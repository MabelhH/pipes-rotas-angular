import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MostarComponent } from './mostar/mostar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    MostarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
