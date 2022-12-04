import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MediumOverflowComponent } from '../medium-overflow/medium-overflow.component';
import { RouterModule, Routes } from '@angular/router';
// import { MediumHeaderComponent } from '../medium-overflow/medium-header/medium-header.component';


const routes: Routes = [
  {path:'medium',component:MediumOverflowComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
