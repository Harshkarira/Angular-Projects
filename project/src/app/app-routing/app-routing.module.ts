import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MediumOverflowComponent } from '../medium-overflow/medium-overflow.component';
import { RouterModule, Routes } from '@angular/router';
import { MediumContentComponent } from '../medium-overflow/medium-content/medium-content.component';
// import { MediumHeaderComponent } from '../medium-overflow/medium-header/medium-header.component';


const routes: Routes = [
  {path:'medium',component:MediumContentComponent},
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
